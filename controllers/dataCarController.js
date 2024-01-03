const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017/');


exports.getAllCars = async (req, res) => {
  console.log("getAllCars test");
  await client.connect();
  const db = client.db('test'); 
  const film = await db.collection('Voitures').find({}).toArray();
  console.log(film);
}