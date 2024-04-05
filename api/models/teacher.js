const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personnel = require('./personnel');


const TeacherSchema = new Schema({
	Personnel: { 
        type: Schema.Types.ObjectId, 
        ref: personnel },
    Rank: {
		type: String,
        default:"New"
	},
    Specialty: {
        type:String,
        required:true
    }
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;