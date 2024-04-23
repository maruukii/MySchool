const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _class=require('./class');

const AlumniSchema = new Schema({
	FirstName: {
		type: String,
        required: true
	},
    LastName: {
		type: String,
        required: true
	},
    Age: {
		type: Number,
		required:true
	},
    Spec: {
		type: String,
        required:true
	},
	Class: {
		type: Schema.Types.ObjectId, 
        ref: _class	
	}
});

const Alumni = mongoose.model("Alumni", AlumniSchema);

module.exports = Alumni;