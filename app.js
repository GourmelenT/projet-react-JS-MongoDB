const express = require('express');
const app = express();

const { connectToDatabase } = require('./connect.js');

async function getDataFromDatabase() {
    db = await connectToDatabase();
}

let db = getDataFromDatabase();

app.get('/api/voitures', async (req, res) => {
    const collection = db.collection('Voitures');
    const result = await collection.find().toArray();
    console.log(result);
});

app.get('/api/tests', async (req, res) => {
    const collection = db.collection('Tests');
    const result = await collection.find().toArray();
    console.log(result);
});

// Démarrage du serveur Express
app.listen(3000, () => {
    console.log('Serveur Express démarré sur le port 3000');
});