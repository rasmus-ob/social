const dbConfig = require('./db/conn');
const express = require('express');
const app = express();
const userRoute = require('./route/user');
const PORT = process.env.PORT;

dbConfig.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoute);

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(PORT, () => {
	console.log(`server is listening on port: ${PORT}`);
});
