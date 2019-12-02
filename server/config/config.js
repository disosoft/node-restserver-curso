//Configuracion Puerto
process.env.PORT = process.env.PORT || 3000;
//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//Vencimiento de token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
//seed de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
//base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;