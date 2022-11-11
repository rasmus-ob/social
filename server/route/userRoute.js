const express = require('express');
const router = express.Router();

const userController = require('../db/controllers/userController');

router.get('/', async (req, res) => {
	const allUsers = await userController.getAllUsers();
	res.json(allUsers);
});

router.post('/create', async (req, res) => {
	const createdUser = await userController.createUser(req.body);
	res.json(createdUser);
});

module.exports = router;
