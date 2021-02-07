var mongoose = require('mongoose');
const Config = require('./config.js');

mongoose.connect(Config.DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }).then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });