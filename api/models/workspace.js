const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkspaceSchema = new Schema({
	Code: {
		type: String,
		required: true
	},
	Name: {
		type: String,
		required: true
	},
	Users: {
		type: Number,
        default:0
	},
    
});

const Workspace = mongoose.model("Workspace", WorkspaceSchema);

module.exports = Workspace;