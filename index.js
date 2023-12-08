const db = require("./src/db");
const server = require("./src/server");
const PORT = 3001;

server.listen(PORT);

server.on('listening', () => {
  console.log(`La app está en linea en el puerto ${PORT}`);
});

server.on('error', (error) => {
  console.error('Error al iniciar el servidor:', error);
});

db();






















// const db = require("./src/db");
// const server = require("./src/server");
// const PORT = 3001;

// // server.listen(PORT, () => {
// //     console.log('La app está en linea');
// // });
// server.listen(PORT)
//     .then(() => {
//         console.log(`La app está en linea en el puerto ${PORT}`);
//     })
//     .catch((error) => {
//         console.error('Error al iniciar el servidor:', error);
//     });

// db();