const User = require('../models/userModel');

async function createUser({ name, age, email }) {
	const createdUser = await User.create({
		name: name,
		age: age,
		email: email,
	});

	return createdUser;
}

async function getAllUsers() {
	const allUsers = await User.find();

	return allUsers;
}

module.exports = { createUser, getAllUsers };
