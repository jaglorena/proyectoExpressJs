const { DataTypes } = require('sequelize');
const sequelize = require('../../libs/Sequelize');

const PRODUCTO_TABLE = 'productos';

const Productos = sequelize.define('productos', {
    ID_Producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Artista_Banda: {
        type: DataTypes.STRING(100)
    },
    Genero: {
        type: DataTypes.STRING(50)
    },
    Precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    Stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Fecha_Lanzamiento: {
        type: DataTypes.DATE
    },
    Discografica: {
        type: DataTypes.STRING(100)
    }
}, {
    tableName: PRODUCTO_TABLE,
    timestamps: true
});

const productosSchema = {
    ID_Producto: DataTypes.INTEGER,
    Nombre: DataTypes.STRING(100),
    Tipo: DataTypes.STRING(50),
    Artista_Banda: DataTypes.STRING(100),
    Genero: DataTypes.STRING(50),
    Precio: DataTypes.DECIMAL(10, 2),
    Stock: DataTypes.INTEGER,
    Fecha_Lanzamiento: DataTypes.DATE,
    Discografica: DataTypes.STRING(100)
};

module.exports = {
    Productos,
    productosSchema
};
