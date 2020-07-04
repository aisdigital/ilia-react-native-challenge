const { version } = require('./package.json');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  helpers: {
    version,
    extra: {
      API_KEY: process.env.API_KEY,
      REDUX_SECRET_KEY: process.env.REDUX_SECRET_KEY
    }
  }
};