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
		default: false,
        required: true
	},
    LastName: {
		type: String,
		default: false,
        required: true
	},
    Job: {
		type: String,
		default: false,
        required: true
	},
    Password: {
		type: String,
		default: false,
        required: true
	},
    PhoneNumber: {
		type: Number,
		default: false,
	},
});

const Personnel = mongoose.model("Personnel", PersonnelSchema);

module.exports = Personnel;