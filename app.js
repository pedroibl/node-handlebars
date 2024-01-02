const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 5000;
// const routes = require('./routes/');

const hbs = expbs.create({
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'views/layout'),
	extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	res.render('index', { title: 'Node Proj Consumindo API', name: 'Pedro ' });
});

app.get('/about', (req, res) => {
	res.render('about', { title: 'About Me' });
});

// app.use('/', routes);

app.listen(port, () =>
	console.log(
		'> Server is up http://localhost:5000 and running on port : ' + port
	)
);
