const express = require('express');

const produtosRouter = require('./productos.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/productos', produtosRouter);
}

module.exports = routerApi;