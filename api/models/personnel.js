const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonnelSchema = new Schema({
	ID: {
		type: String,
		required: true
	},
	CIN: {
		type: Number,
		default: false,
        required: true
	},
	FirstName: {
		type: String,
        required: true
	},
    LastName: {
		type: String,
        required: true
	},
    Job: {
		type: String,
        required: true
	},
    Password: {
		type: String,
        required: true
	},
    PhoneNumber: {
		type: Number,
		default: 0,
	},
});

const Personnel = mongoose.model("Personnel", PersonnelSchema);

module.exports = Personnel;