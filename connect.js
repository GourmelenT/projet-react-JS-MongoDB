const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'VoitureTest';

const client = new MongoClient(url);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connexion à la base de données MongoDB établie');
    database = client.db(dbName);
    return database;
    } catch (error) {
        console.error('Erreur de connexion à la base de données MongoDB:', error);
    }
}

module.exports = {
  connectToDatabase
};