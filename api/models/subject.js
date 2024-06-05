const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
	SubjectName: {
		type: String,
		required: true
	},
	Level: {
		type: String,
        required: true
	},
	Spec: {
		type: String,
        required: true
	},
	Coef: {
		type: Number,
        required: true
	},
	CoefDC: {
		type: Number,
        default: 0
	},
	CoefDS: {
		type: Number,
        default: 0
	},
	CoefTP: {
		type: Number,
        default: 0
	},
});

const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = Subject;