const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
	SubjectName: {
		type: String,
		required: true
	},
	Coef: {
		type: Number,
        required: true
	}
});

const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = Subject;