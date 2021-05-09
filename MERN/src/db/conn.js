// Connection to MONGODB Atlas
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tommyc:tommyc@cluster0.ska6c.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 // The database to use
 const dbName = "test";

client.connect(err => {
  const collection = client.db("test").collection("devices");

  client.close();
});