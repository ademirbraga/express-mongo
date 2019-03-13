import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import database from './config/database';

const app = express();

const myLogger = function (req, res, next) {
	console.log('LOGGED');
	next();
};

app.use(myLogger);


const configureExpress = () => {
	app.use(bodyParser.json());
	app.use('/', routes);
	return app;
};

export default () => database.connect().then(configureExpress);