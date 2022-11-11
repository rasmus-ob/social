const express = require('express');
const router = express.Router();

const userDBFunctions = require('../db/controllers/userController');

router.post('/', async (req, res) => {
	const createdUser = await userDBFunctions.createUser(req.body);
	res.json(createdUser);
});

module.exports = router;
