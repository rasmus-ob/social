const express = require('express');
const router = express.Router();

const messageController = require('../db/controllers/messageController');

// Responds with all the created messages on ('/messages/')
router.get('/', async (req, res) => {
	const allMessages = await messageController.getAllMessages();
	res.json(allMessages);
});

// Takes in the following params in the request body (userID, title, text)
// Responds with the created user on ('/messages/create)
router.post('/create', async (req, res) => {
	const createdMessage = await messageController.createMessage(req.body);
	res.json(createdMessage);
});

module.exports = router;
