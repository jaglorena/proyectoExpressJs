// Se maneja todo el API REST

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

router
    .get('/', productoController.get)  
    .get('/:id', productoController.getById)
    .post('/', productoController.create)
    .put('/:id', productoController.update) 
    .delete('/:id', productoController._delete);

module.exports = router;
