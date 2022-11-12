const mongoose = require('mongoose');

// Creates the messageSchema
const messageSchema = new mongoose.Schema({
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	title: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});

// Exports a model that is made with the messageSchema
module.exports = mongoose.model('Message', messageSchema);
