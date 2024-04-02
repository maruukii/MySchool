const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt=require ('bcrypt');

const PersonnelSchema = new Schema({
	ID: {
		type: String,
		required: [true,'Please Enter ID Code'],
		unique:true
	},
	CIN: {
		type: Number,
		default: false,
        required: [true,'Please Enter CIN Number'],
		unique:true
	},
	FirstName: {
		type: String,
        required: [true,'Please Enter First Name']
	},
    LastName: {
		type: String,
        required: [true,'Please Enter Last Name']
	},
    Job: {
		type: String,
        required: [true,'Please Choose Job Name']
	},
    Password: {
		type: String,
        required: [true,'Please Enter Password'],
		validate: {
			validator: function(value) {
			  // Password must be between 6 and 18 characters and contain at least one uppercase letter and one numeric character
			  return /^(?=.*[A-Z])(?=.*\d).{6,18}$/.test(value);
			},
			message: 'Password must be between 6 and 18 characters and contain at least one uppercase letter and one numeric character'
		  }

	}, 
    PhoneNumber: {
		type: Number,
		default: 0,
	},
});

PersonnelSchema.pre('save',async function (next){
	const salt = await bcrypt.genSalt(); //Number of salt round for bcrypt
	this.Password = await bcrypt.hash (this.Password, salt);
	console.log("password encrypted")
	next();
});
PersonnelSchema.post('save',async function (doc,next){
	console.log('Personnel saved ',doc)
	next();
});

const Personnel = mongoose.model("Personnel", PersonnelSchema);

module.exports = Personnel;