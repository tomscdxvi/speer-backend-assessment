// Connection to MongoDb Atlas
const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@test.ska6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB =  async() =>{
    await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    console.log('Connected to database');
}

module.exports = connectDB;