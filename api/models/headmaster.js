const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personnel = require('./personnel');


const HeadmasterSchema = new Schema({
	Personnel: { 
        type: Schema.Types.ObjectId, 
        ref: personnel }
});

const Headmaster = mongoose.model("Headmaster", HeadmasterSchema);

module.exports = Headmaster;