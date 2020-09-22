const express = require('express');
const routes = express.Router();

const ordersController = require('../controllers/ordersController');

routes.get(
    '/user/:id',
    ordersController.getOrdersUser
);

routes.get(
    '/payment/:order_id/:ext_ref_id',
    ordersController.getOrdersOrder
);

routes.get(
    '/cart/user/:id',
    ordersController.getCartUser
);

module.exports = routes;