const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _class= require('./class');
const _subject=require('./subject');
const _teacher=require('./teacher');      
const TeachingSchema = new Schema({
    Teacher: {
		type: Schema.Types.ObjectId, 
        ref: _teacher,
		required:true
	},
    Class: {
		type: Schema.Types.ObjectId, 
        ref: _class,
		required:true	
	},
	Subject: {
		type: Schema.Types.ObjectId, 
        ref: _subject,
		required:true
	}
    
});



const Teaching = mongoose.model("Teaching", TeachingSchema);

module.exports = Teaching;