const Message = require('../models/messageModel');

async function createMessage({ userID, title, text }) {
	const createdMessage = await Message.create({
		userID: userID,
		title: title,
		text: text,
	});

	return createdMessage;
}

async function getAllMessages() {
	const allMessages = await Message.find();
	return allMessages;
}

module.exports = { createMessage, getAllMessages };
