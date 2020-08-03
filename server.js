const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./routes/index');

const app = express();

require('dotenv').config();
// view engine setup
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// We need this middleware to accept incoming JSON data
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/', indexRouter);

// App Listening
app.listen(3000, function() {
  console.log(`Express is listening to port 3000`);
});
