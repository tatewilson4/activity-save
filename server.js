require('zone.js/dist/zone-node');

const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const morgan = require('morgan');
const moment = require('moment');


const app = express();
const port = process.env.PORT || 3000;


const appServer = require('./dist-server/main.bundle');


mongoose.connect(config.database)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const angular = require('./routes/angular');
const users = require('./routes/users');
const activitiesController = require('./routes/activityController.js');


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());


app.get('/', angular.serverRouter);

app.use ( morgan ('tiny'));


app.use('/users', users);
app.use('/activities', activitiesController );


app.use(express.static(`${__dirname}/dist`));


app.engine('html', ngUniversal.ngExpressEngine({
    bootstrap: appServer.AppServerModuleNgFactory
}));
app.set('view engine', 'html');
app.set('views', 'dist');

app.get('*', angular.serverRouter);


app.use(function (req, res, next) {
    let err = new Error('Not Found');
    res.status(404).json({
        status: 404,
        message: err.message,
        name: err.name
    });
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({
        status: 500,
        message: err.message,
        name: err.name
    });
});


app.listen(port, () => console.log(`Server started on port ${port}`));
