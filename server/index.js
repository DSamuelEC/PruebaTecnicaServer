// Import the database module and server
const db = require("./src/db");
const server = require("./src/server");

// Port on which the server will run
const PORT = 3001;

// Start the connection to the database
db();

// Start the server and listen on the specified port
server.listen(PORT);

// Event handler when the server is listening
server.on('listening', () => {
  console.log(`La app está en linea en el puerto ${PORT}`);
});

// Event handler for server errors
server.on('error', (error) => {
  console.error('Error al iniciar el servidor:', error);
});