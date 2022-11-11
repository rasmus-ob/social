const Message = require('../models/messageModel');

async function createMessage({ userID, title, text }) {
	const createdMessage = await Message.create({
		userID: userID,
		title: title,
		text: text,
	});

	return createdMessage;
}

module.exports = { createMessage };
