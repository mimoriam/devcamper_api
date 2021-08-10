const express = require('express');
const dotenv = require('dotenv')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Load env vars:
dotenv.config({ path: './config/config.env' });

const bootcampRouter = require('./routes/bootcamps');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/bootcamps', bootcampRouter);

module.exports = app;
