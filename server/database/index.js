//Connect to Mongo database
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//your local database url
//27017 is the default mongoDB port
const uri = process.env.CDB_CONNECTION;
const mongooseConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(uri, mongooseConnectionOptions).then(
  () => {
    console.log("Connected to Mongo");
  },
  err => {
    /** handle initial connection error */

    console.log("error connecting to Mongo: ");
    console.log(err);
  }
);

module.exports = mongoose.connection;
