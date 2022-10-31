const express = require('express');
const cookieParser = require('cookie-parser');
const appConfig = require('./config').app;
const indexRouter = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const PORT = appConfig.port;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(indexRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
