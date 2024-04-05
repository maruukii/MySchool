const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _personnel = require('./personnel');
const _subject=require('./subject')
const _class=require('./class')
        
const TimetableSchema = new Schema({
	Personnel: {
		type: Schema.Types.ObjectId, 
        ref: _personnel,
		required:true	
	},
	Subject: {
		type: Schema.Types.ObjectId, 
        ref: _subject,
		required:true
	},
	Class: {
		type: Schema.Types.ObjectId, 
        ref: _class,
		required:true
	},
    Hours: {
		type: Number,
        default:0,
	},
    DateModified: {
		type: String,
	},
    Timetable:{
        type: [[String]],
        default:[
			["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
			["", "", "", "", "", "", "", ""]
		]
    }
    
});
TimetableSchema.pre('save',async function (next){
	const date = new Date();
    this.DateModified = date.toLocaleString(); // or date.toLocaleDateString() for just the date
	next();
});


const Timetable = mongoose.model("Timetable", TimetableSchema);

module.exports = Timetable;