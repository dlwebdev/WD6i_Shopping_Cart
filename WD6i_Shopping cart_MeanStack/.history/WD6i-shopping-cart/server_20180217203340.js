const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./server/config/database');

const api = require('./server/routes/api');



const app = express();

const port = process.env.PORT || '3000';
app.set('port', port);

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', api);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

app.use('/', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));





/*



*/