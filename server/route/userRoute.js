const express = require('express');
const router = express.Router();

// Getting the userController
const userController = require('../db/controllers/userController');

// Responds with all the created users on ('/users/')
router.get('/', async (req, res) => {
	const allUsers = await userController.getAllUsers();
	res.json(allUsers);
});

// Takes in the following params in the request body (name, age, email)
// Responds with the created user on ('/users/create)
router.post('/create', async (req, res) => {
	const createdUser = await userController.createUser(req.body);
	res.json(createdUser);
});

module.exports = router;
