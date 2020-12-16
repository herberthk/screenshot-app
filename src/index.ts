import express, { Application } from 'express';
import exphbs from 'express-handlebars';

import path from 'path';
import compression from 'compression';

import home from './routes/home';
import api from './routes/api';

import { __prod__ } from './util/constants';

const app: Application = express();

// compress all responses
app.use(compression());

const port = process.env.PORT || 8000;
// Handlebars
const hbs = exphbs.create({
	extname: '.hbs',
	layoutsDir: './views/layouts',
	defaultLayout: 'main'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
// Static folder
app.use(express.static(path.join(__dirname, '../public')));

// morgan
if (!__prod__) {
	const morgan = require('morgan');
	app.use(morgan('dev'));
}

app.use(express.json());
// Routes
app.use('/', home);
app.use('/api', api);

app.listen(port, () =>
	console.log(`app started on port ${port} in ${process.env.NODE_ENV} mode`)
);
