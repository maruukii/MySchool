const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const workspace = require('./workspace');

const PersonnelSchema = new Schema({
	ID: {
		type: String,
		unique: true
	},
	CIN: {
		type: String,
		default: false,
		required: [true, 'Please Enter CIN Number'],
		unique: true
	},
	FirstName: {
		type: String,
		required: [true, 'Please Enter First Name']
	},
	LastName: {
		type: String,
		required: [true, 'Please Enter Last Name']
	},
	Job: {
		type: String,
		required: [true, 'Please Choose Job Name']
	},
	Password: {
		type: String,
	},
	Workspace: {
		type: Schema.Types.ObjectId, 
        ref: workspace },
	PhoneNumber: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	modifiedAt: {
		type: Date,
		default: Date.now
	},
});

PersonnelSchema.pre('save', async function (next) {
	
		// this.Password = generateRandomPassword();
		// console.log(this.Password);
		try {
			const salt = await bcrypt.genSalt(); // Number of salt rounds for bcrypt
			const hashedPassword =await bcrypt.hash(this.Password, salt);
			console.log(hashedPassword)
			console.log(this.Password)
			this.Password = hashedPassword;
			console.log("Password encrypted");
		} catch (error) {
			next(error); // Pass any error to the next middleware
		}
	
	if (!this.ID || this.isModified('Job')) {
        const randomNumber = generateRandomNumber();
        this.ID = `${this.Job}-${randomNumber}`;
    }

	next();
});

PersonnelSchema.post('save', function (doc, next) {
	console.log('Personnel saved ', doc);
	if(!this.createdAt){
		doc.createdAt = new Date();
	}
	doc.modifiedAt=new Date();
	next();
});

// const generateRandomPassword = (length = 8) => {
// 	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
// 	let password = '';
// 	for (let i = 0; i < length; i++) {
// 		const randomIndex = Math.floor(Math.random() * characters.length);
// 		password += characters[randomIndex];
// 	}
// 	return password;
// };

const generateRandomNumber = () => {
	return Math.floor(1000 + Math.random() * 9000).toString(); // Ensures a 4-digit number
};

const Personnel = mongoose.model("Personnel", PersonnelSchema);

module.exports = Personnel;
