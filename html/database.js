const mariadb = require('mysql');

// DB 1 - users

const poolUsers = mariadb.createPool({
    host: '127.0.0.1',
    port: '6034',
    user: 'root',
    password: 'demo1',
    database: 'demo1'
});


const getConUsers = async function  () {
    try {
        const connection = await poolUsers.getConnection();
        return connection;
    } catch (error) {
        console.log('poolUsers', error);
    } 
}




/*
// DB 2 - orders

const poolOrders = mariadb.createPool({
    host: 'localhost',
    port: '3306',
    user: 'demo2',
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
    host: 'localhost',
    port: '3306',
    user: 'demo3',
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
    host: 'localhost',
    port: '3306',
    user: 'demo4',
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
    host: 'localhost',
    port: '3306',
    user: 'demo5',
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

*/

module.exports = { 
    poolUsers
};