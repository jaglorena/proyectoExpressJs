const { Sequelize } = require("sequelize");
const setupModels = require('../db/tablas');

const { config } = require('../config/config');

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'postgresql'
    }
);

// Autenticación de la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });

// Sincronización de modelos y configuración
sequelize.sync() // Migración de la tabla
  .then(() => {
    console.log(typeof setupModels); // Añade esta línea para verificar el tipo de setupModels
    return setupModels(sequelize); // Configuración de modelos
  });


// Exporta la instancia de Sequelize y setupModels como un objeto
module.exports = {
  sequelize,
  setupModels
};
