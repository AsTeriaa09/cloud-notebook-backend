const mongoose = require("mongoose");

const URI =
  "mongodb+srv://mahiraakhter950:CBOETgA48eL5TQEi@cluster0.dmitore.mongodb.net/iNotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successfull");
  } catch (error) {
    console.log("connection failed");
  }
};

module.exports = connectToMongo;
