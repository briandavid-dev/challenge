const express = require('express');
const routes = express.Router();

const usersController = require('../controllers/usersController');

routes.get(
    '/:id',
    usersController.getUsers
);

module.exports = routes;