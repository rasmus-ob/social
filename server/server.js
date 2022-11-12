const dbConfig = require('./db/conn');
const express = require('express');
const app = express();
const userRoute = require('./route/userRoute');
const messageRoute = require('./route/messageRoute');
const PORT = process.env.PORT;

// Connecting to the database
dbConfig.connect();

// Using express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using the routes
app.use('/users', userRoute);
app.use('/messages', messageRoute);

// Responds with hello on ('/')
app.get('/', (req, res) => {
	res.send('hello');
});

// Server is listening on the specialized port
app.listen(PORT, () => {
	console.log(`server is listening on port: ${PORT}`);
});
