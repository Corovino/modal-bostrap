const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    config = require('./config'),
    userRoutes = require('./routes/User'),
    accountRoutes = require('./routes/Account'),
    authRoutes = require('./routes/auth'),
    app = express();

mongoose.connect(config.database, err => {
    if (err) console.log(err);
    console.log('connected to the zinobe database');
});


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(allowCrossDomain);
app.use(cors());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', accountRoutes);


app.listen(config.port, err => console.log(`Conenected in port ${ config.port }`));