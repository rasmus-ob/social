const Message = require('../models/messageModel');

// Creates a message
async function createMessage({ userID, title, text }) {
	const createdMessage = await Message.create({
		userID: userID,
		title: title,
		text: text,
	});

	return createdMessage;
}

// Gets all the messages
async function getAllMessages() {
	const allMessages = await Message.find();
	return allMessages;
}

module.exports = { createMessage, getAllMessages };
