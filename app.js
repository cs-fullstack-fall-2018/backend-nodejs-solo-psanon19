const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config');

const port = process.env.PORT || 3001;

console.log(`Listener started on port ${port}...`);
app.listen(port);