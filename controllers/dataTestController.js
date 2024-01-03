const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017/');
exports.getAllTests = async (req, res) => {
  console.log("getAllTest test");
  await client.connect();
  const db = client.db('test'); 
  const film = await db.collection('tests').find({}).toArray();
  console.log(film);
}