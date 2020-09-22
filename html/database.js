const mariadb = require('mysql2');

// DB 1 - users

const poolUsers = mariadb.createPool({
    host: '127.0.0.1',
    port: '6034',
    user: 'root',
    password: 'demo1',
    database: 'demo1'
});



// DB 2 - orders

const poolOrders = mariadb.createPool({
    host: 'localhost',
    port: '6035',
    user: 'demo2',
    password: 'demo2',
    database: 'demo2'
});



// DB 3 - products

const poolProducts = mariadb.createPool({
    host: 'localhost',
    port: '6036',
    user: 'demo3',
    password: 'demo3',
    database: 'demo3'
});



// DB 4 - payments

const poolPayments = mariadb.createPool({
    host: 'localhost',
    port: '6037',
    user: 'demo4',
    password: 'demo4',
    database: 'demo4'
});



// DB 5 - carts

const poolCarts = mariadb.createPool({
    host: 'localhost',
    port: '6038',
    user: 'demo5',
    password: 'demo5',
    database: 'demo5'
});





module.exports = { 
    poolUsers,
    poolOrders,
    poolProducts,
    poolPayments,
    poolCarts
};

