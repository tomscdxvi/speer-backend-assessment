// Connection to MongoDb Atlas
const mongoose = require('mongoose');

const uri = "mongodb+srv://dbUser:dbUser@test.ska6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDb = async() =>{
  await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
  console.log("Connected to database");
}

module.exports = connectDb;