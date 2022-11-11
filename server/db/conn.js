const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

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
