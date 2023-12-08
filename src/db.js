const mongoose = require('mongoose');
const nameDb = 'sneaker-app'
const user = 'drenvio';
const password = 'moM5f3AodwLE5d0A';
const DB_URI = `mongodb://${user}:${password}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/${nameDb}?ssl=true&replicaSet=atlas-y8oxsk-shard-0&authSource=admin`;

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI
        );

        const db = mongoose.connection;

        db.on('error', (error) => {
            console.error('Error en la conexión a la base de datos:', error);
        });

        db.once('open', () => {
            console.log('Conexión exitosa a la base de datos MongoDB');
        });
    };

    connect();
};



































// const mongoose = require('mongoose');

// const user = 'drenvio';
// const password = 'moM5f3AodwLE5d0A';
// const DB_URI = `mongodb+srv://${user}:${password}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net/ac-aemgtkt-shard-00-01.unqyghm.mongodb.net/ac-aemgtkt-shard-00-02.unqyghm.mongodb.net/27017?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;

// module.exports = () => {
//     const connect = () => {
//         mongoose.connect(
//             DB_URI,
//             {
//                 // useNewUrlParser: true,
//                 // useUnifiedTopology: true
//             }
//         );

//         const db = mongoose.connection;

//         db.on('error', (error) => {
//             console.error('Error en la conexión a la base de datos:', error);
//         });

//         db.once('open', () => {
//             console.log('Conexión exitosa a la base de datos MongoDB');
//         });
//     };

//     connect();
// };



//Segundo intento conexion a db
// const mongoose = require('mongoose');

// const user = 'drenvio'
// const password = 'moM5f3AodwLE5d0A'
// const DB_URI = `mongodb+srv://${user}:${password}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`

// module.exports = () => {
//     const connect = () => {
//         mongoose.connect(
//             DB_URI,
//             {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true
//             }
//         );

//         const db = mongoose.connection;

//         db.on('error', (error) => {
//             console.error('Error en la conexión a la base de datos:', error);
//         });

//         db.once('open', () => {
//             console.log('Conexión exitosa a la base de datos MongoDB');
//         });
//     };

//     connect();
// };




// const mongoose = require('mongoose');

// const DB_URI = `mongodb://drenvio:<password>@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:270
// 17,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.
// unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSou
// rce=admin`

// module.exports = () => {
//     const connect = () => {
//         mongoose.connect(
//             DB_URI,
//             {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true
//             }
//         );

//         const db = mongoose.connection;

//         db.on('error', (error) => {
//             console.error('Error en la conexión a la base de datos:', error);
//         });

//         db.once('open', () => {
//             console.log('Conexión exitosa a la base de datos MongoDB');
//         });
//     };
//     connect();
// }


// // module.exports = () => {
// //     const connect = () => {
// //         mongoose.connect(
// //             DB_URI,
// //             {
// //                 useNewUrlParser: true,
// //                 useUnifiedTopology: true
// //             },
// //             (error) => {
// //                 error ? console.log('ERROR EN LA DB!!!!') : console.log('CONEXION CORRECTA!!!');
// //             }
// //         )
// //     }
// //     connect();
// // }