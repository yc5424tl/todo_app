// let createError = require('http-errors');
let express = require('express');
let path = require('path');
// let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let flash = require('express-flash')
let session = require('express-session')

let db_url = process.env.MONGO_URL;
let sess_secret = process.env.TO_DO_SESS_SEC;

mongoose.connect(db_url)
    .then( () => {console.log('Connected to mLab');})
    .catch( (err) => {console.log('Error connecting to mLab', err);});

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({secret: sess_secret, resave: false, saveUninitialized: false}));
app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development

    if (err.kind === 'ObjectId' && err.name === 'CastError') {
        err.status = 404 ;
        err.message = 'ObjectId Not Found';
        res.status(err.status);
        res.render('404');
    }

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500)
    res.render('error');
});

module.exports = app;
