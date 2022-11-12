const User = require('../models/userModel');

// Creates a user
async function createUser({ name, age, email }) {
	const createdUser = await User.create({
		name: name,
		age: age,
		email: email,
	});

	return createdUser;
}

// Gets all the users
async function getAllUsers() {
	const allUsers = await User.find();

	return allUsers;
}

module.exports = { createUser, getAllUsers };
