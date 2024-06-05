const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassroomSchema = new Schema({
	Type: {
		type: String,
		required: true
	},
	Number: {
		type: String,
		required: true
	},
	Capacity: {
		type: String,
        required:true
	},
});

const Classroom = mongoose.model("Classroom", ClassroomSchema);

module.exports = Classroom;