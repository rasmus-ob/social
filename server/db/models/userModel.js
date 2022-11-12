const mongoose = require('mongoose');

// Creates the userSchema
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

// Exports a model that is made with the userSchema
module.exports = mongoose.model('User', userSchema);
