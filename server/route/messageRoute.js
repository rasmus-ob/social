const express = require('express');
const router = express.Router();

const messageController = require('../db/controllers/messageController');

router.post('/create', async (req, res) => {
	const createdMessage = await messageController.createMessage(req.body);
	res.json(createdMessage);
});

module.exports = router;
