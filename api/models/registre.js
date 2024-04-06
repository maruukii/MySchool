const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _teaching= require('./teaching');
const _alumni=require('./alumni');      
const RegistreSchema = new Schema({
    Teaching: {
		type: Schema.Types.ObjectId, 
        ref: _teaching,
		required:true
	},
    Alumni: {
		type: Schema.Types.ObjectId, 
        ref: _alumni,
		required:true	
	},
	AbsenceDate:[{
        type:String
    }],
    AbsenceCount:{
        type:Number,
        default:0
    }
    
});



const Registre = mongoose.model("Registre", RegistreSchema);

module.exports = Registre;