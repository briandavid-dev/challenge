const express = require('express');
const routes = express.Router();

const ordersController = require('../controllers/ordersController');

routes.get(
    '/:id',
    ordersController.getOrders
);

routes.get(
    '/user/:id',
    ordersController.getOrdersUser
);

module.exports = routes;