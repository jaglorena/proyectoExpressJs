const { tablas } = require('../libs/Sequelize');

class productoService {

    constructor() {
    }

    async find() {
        const res = await tablas.producto.findAll();
        return res;
    }

    async findOne(id) {
        const res = await tablas.producto.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await tablas.producto.create(data);
        return res;
    }

    async delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return { deleted: true};
    }
}

module.exports = productoService;