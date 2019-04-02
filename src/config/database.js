import mongoose from 'mongoose';
//import config from 'config';

mongoose.Promise = Promise;

const mongodbUrl = "mongodb://localhost:27017/teste";//config.get('database.mongoUrl');

const connect = () => mongoose.connect(mongodbUrl, { useNewUrlParser: true });

export default {
	connect
}