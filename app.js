const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Load env vars:
dotenv.config({path: './config/config.env'});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
