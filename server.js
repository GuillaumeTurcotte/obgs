const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4321;

app.use(bodyParser.urlencoded({ extended: true }));

require('./api/routes')(app, {});

app.listen(port, () => console.log(' *** obgs started on port: ' + port + ' ***'));
