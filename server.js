const http = require('http');
const app = require('./app');
const express = require('express');
const { MongoClient } = require('mongodb');
const serverUrl = 'http://localhost:3456';
const prodRouter = require('./router/productsRouter');

app.use('/api', prodRouter);
app.use(express.static('public'));

// const uri = 'mongodb+srv://testMongo:TestCar123@cluster0.rm36l2i.mongodb.net/';
const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect().then(() => {
    const db = client.db('test'); 
    const server = http.createServer(app);

    server.listen(3456, () => {
        console.log('\x1b[35m%s\x1b[0m', `Le serveur tourne sur le port 3456 de votre localhost`);
        console.log('\n');
        console.log('Accéder au serveur : ' + '\x1b[36m%s\x1b[0m', serverUrl);
        console.log('\n');
    });
}).catch((error) => {
    console.log("Erreur lors de la connexion à la base de données serveur : " + '\n' + error);
});



