const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personnel = require('./personnel');


const SupervisorSchema = new Schema({
	Personnel: { 
        type: Schema.Types.ObjectId, 
        ref: personnel },
    Rank: {
		type: String,
        default:"New"
	},
});

const Supervisor = mongoose.model("Supervisor", SupervisorSchema);

module.exports = Supervisor;