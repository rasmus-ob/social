const mongoose = require('mongoose');

// Getting the hostname and database name from the .env file
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

// Tries to connect, returns error if something goes wrong
async function connect() {
	try {
		const connection = await mongoose.connect(
			`mongodb://${DB_HOST}/${DB_NAME}`
		);

		console.log('database connected');
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}

module.exports = { connect };
