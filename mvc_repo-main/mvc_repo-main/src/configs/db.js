const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://mayuri123@cluster0.pl4vh.mongodb.net/web_15?retryWrites=true&w=majority"
  );
};

module.exports =connect;
