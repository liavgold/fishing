require('dotenv').config();

const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    url: process.env.DB_URL,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
};

module.exports = config;
