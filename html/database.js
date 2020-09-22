const mariadb = require('mariadb');

// DB 1 - users

const poolUsers = mariadb.createPool({
    host: '127.0.0.1',
    port: '6034',
    user: 'root',
    password: 'demo1',
    database: 'demo1'
});


async function getConnection () {
    try {
        const connection = await poolUsers.getConnection();
        return connection;
    } catch (error) {
        console.log('poolUsers', error);
    } 
}



// DB 2 - orders

const poolOrders = mariadb.createPool({
    host: '127.0.0.1',
    port: '6035',
    user: 'root',
    password: 'demo2',
    database: 'demo2'
});


async function getConnection () {
    try {
        const connection = await poolOrders.getConnection();
        return connection;
    } catch (error) {
        console.log('poolOrders', error);
    } 
}



// DB 3 - products

const poolProducts = mariadb.createPool({
    host: '127.0.0.1',
    port: '6036',
    user: 'root',
    password: 'demo3',
    database: 'demo3'
});


async function getConnection () {
    try {
        const connection = await poolProducts.getConnection();
        return connection;
    } catch (error) {
        console.log('poolProducts', error);
    } 
}



// DB 4 - payments

const poolPayments = mariadb.createPool({
    host: '127.0.0.1',
    port: '6037',
    user: 'root',
    password: 'demo4',
    database: 'demo4'
});


async function getConnection () {
    try {
        const connection = await poolPayments.getConnection();
        return connection;
    } catch (error) {
        console.log('poolPayments', error);
    } 
}



// DB 5 - carts

const poolCarts = mariadb.createPool({
    host: '127.0.0.1',
    port: '6038',
    user: 'root',
    password: 'demo5',
    database: 'demo5'
});


async function getConnection () {
    try {
        const connection = await poolCarts.getConnection();
        return connection;
    } catch (error) {
        console.log('poolCarts', error);
    } 
}





module.exports = { 
    poolUsers,
    poolOrders,
    poolProducts,
    poolPayments,
    poolCarts
};