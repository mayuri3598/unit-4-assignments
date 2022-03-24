const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb+srv://mayuri123@test.wjg1r.mongodb.net/authentication?retryWrites=true&w=majority"
  );
};

module.exports = connect;
