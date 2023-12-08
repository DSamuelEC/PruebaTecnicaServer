// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

require("dotenv").config();

// Database access credentials
const {
    DB_NAME, DB_USER, DB_PASSWORD
} = process.env;

// Build the connection string to MongoDB using the credentials and other parameters
const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=atlas-y8oxsk-shard-0&authSource=admin`;

// Exports a function that is responsible for connecting to the database
module.exports = () => {
    const connect = () => {
        // Use mongoose to connect to the database with the provided connection string
        mongoose.connect(
            DB_URI
        );

        // Get the connection to the database
        const db = mongoose.connection;

        // Configure an event handler to handle connection errors
        db.on('error', (error) => {
            console.error('Error en la conexión a la base de datos:', error);
        });

        // Configure an event handler to handle the successful opening of the connection
        db.once('open', () => {
            console.log('Conexión exitosa a la base de datos MongoDB');
        });
    };

    // Call the connection function
    connect();
};