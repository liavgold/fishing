const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

if (config.db.url) {
  db.url = config.db.url;
} else {
  db.url = `mongodb+srv://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.name}?retryWrites=true&w=majority`;
}

db.user = require('./user')(mongoose);

db.startSession = async () => mongoose.startSession();

db.connectToDB = () => {
  if (config.env !== 'test') {
    db.mongoose
      .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.info('Connected to the database!');
      })
      .catch((err) => {
        console.info(`Cannot connect to the database! ${err.message}`);
      });
  }
};

module.exports = db;
