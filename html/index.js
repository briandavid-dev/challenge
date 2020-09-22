const express = require('express');
const app = express();
const port = 1000;

const { 
    poolUsers,
    poolOrders,
    poolPayments,
    poolCarts,
    poolProducts
} = require('./database');

const routes = {
    orders: require('./routes/orders'),
}


app.use('/api/orders', routes.orders);



app.listen(port, () => {
    console.log(port);
});








(async function restore_db1() {
    try {
        
        var query = `SELECT * 
        FROM information_schema.tables
        WHERE table_schema = 'demo1' 
            AND table_name = 'users'
        LIMIT 1`;

        var promise = poolUsers.promise();

        var [rows,fields] = await promise.query(query);

        // en caso de no existir la tabla, la crea y le inserta data
        if(!rows.length) {
            var query = `
            CREATE TABLE users (
                id VARCHAR(36) PRIMARY KEY,
                username VARCHAR(50) NOT NULL,
                email VARCHAR(30) NOT NULL,
                created_at timestamp NULL,
                updated_at timestamp NULL,
                deleted_at timestamp NULL
            );
            `;

            var promise = poolUsers.promise();

            var [rows,fields] = await promise.query(query);

            console.log("CREATE TABLE users");

            var query = `
            INSERT INTO users (id, username, email, created_at, updated_at, deleted_at)
            VALUES 
                ('0x0be8add0fc6f11eab8920242ac120008', 'Brian', 'brayad@gmail.com', NOW(), NOW(), NOW())
            ;
            `;

            var promise = poolUsers.promise();

            var [rows,fields] = await promise.query(query);

            console.log("INSERT INTO users");


        } else {
            console.log("TABLE users ok");
        }
        

    } catch (error) {
        console.log(error);
    }

})()

