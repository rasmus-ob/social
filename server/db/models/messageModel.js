const mongoose = require('mongoose');

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

module.exports = mongoose.model('Message', messageSchema);
