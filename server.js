const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || '3000'; 
const session = require('express-session');
const passport = require('passport');
const indexRouter = require('./routes/index');
const customersRouter = require('./routes/customers');
const teamsRouter = require('./routes/teams');
const reviewsRouter = require('./routes/reviews');
const playersRouter = require('./routes/players');
const methodOverride = require('method-override');

require('dotenv').config();

const app = express();

require('./config/database');
require('./config/passport');


// view engine setup
app.set('view engine', 'ejs');

// Mount Middlawer
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'SEIProject!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', customersRouter);
app.use('/', reviewsRouter);
app.use('/', playersRouter);
app.use('/teams', teamsRouter);

// App Listening
app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
