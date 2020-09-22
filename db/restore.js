const { 
    poolUsers,
    poolOrders,
    poolPayments,
    poolCarts,
    poolProducts
} = require('../html/database');

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

})();



(async function restore_db2() {
    try {
        
        var query = `SELECT * 
        FROM information_schema.tables
        WHERE table_schema = 'demo2' 
            AND table_name = 'orders'
        LIMIT 1`;

        var promise = poolOrders.promise();

        var [rows,fields] = await promise.query(query);

        // en caso de no existir la tabla, la crea y le inserta data
        if(!rows.length) {
            var query = `
            CREATE TABLE orders (
                id VARCHAR(36) PRIMARY KEY,
                user_id VARCHAR(36),
                cart_id VARCHAR(36),
                total_amount SERIAL,
                create_at TIMESTAMP NULL,
                update_at TIMESTAMP NULL,
                delete_at TIMESTAMP NULL
            );
            `;

            var promise = poolOrders.promise();

            var [rows,fields] = await promise.query(query);

            console.log("CREATE TABLE orders");

            var query = `
            INSERT INTO orders 
            VALUES
                ('0x98e91635fc7011eab8920242ac120008', '0x0be8add0fc6f11eab8920242ac120008', '0x5b456bc2fc6f11eab8920242ac120008', 100000, NOW(), NOW(), NOW())
            ;
            `;

            var promise = poolOrders.promise();

            var [rows,fields] = await promise.query(query);

            console.log("INSERT INTO orders");


        } else {
            console.log("TABLE orders ok");
        }
        

    } catch (error) {
        console.log(error);
    }

})();



(async function restore_db3() {
    try {
        
        var query = `SELECT * 
        FROM information_schema.tables
        WHERE table_schema = 'demo3' 
            AND table_name = 'products'
        LIMIT 1`;

        var promise = poolProducts.promise();

        var [rows,fields] = await promise.query(query);

        // en caso de no existir la tabla, la crea y le inserta data
        if(!rows.length) {
            var query = `
            CREATE TABLE products (
                id VARCHAR(36) PRIMARY KEY,
                name VARCHAR(50),
                sku VARCHAR(255),
                description TEXT,
                price INT,
                create_at TIMESTAMP NULL,
                updated_at TIMESTAMP NULL,
                delete_at TIMESTAMP NULL
            );
            `;

            var promise = poolProducts.promise();

            var [rows,fields] = await promise.query(query);

            console.log("CREATE TABLE products");

            var query = `
            INSERT INTO products
            VALUES 
                ('0xd7651958fc7111eab8920242ac120008', "Bolso Playero", "BOLPLA001", "Bolso grandioso para dama y caballero", 30000, NOW(), NOW(), NOW()),
                ('0xe621216bfc7111eab8920242ac120008', "MacBook Pro 16 i9 32 GB RAM", "MACPRO001", "Macbook 2020 con pantalla retina", 2500000, NOW(), NOW(), NOW())
            ;
            `;

            var promise = poolProducts.promise();

            var [rows,fields] = await promise.query(query);

            console.log("INSERT INTO products");


        } else {
            console.log("TABLE products ok");
        }
        

    } catch (error) {
        console.log(error);
    }

})();



(async function restore_db4() {
    try {
        
        var query = `SELECT * 
        FROM information_schema.tables
        WHERE table_schema = 'demo4' 
            AND table_name = 'payments'
        LIMIT 1`;

        var promise = poolPayments.promise();

        var [rows,fields] = await promise.query(query);

        // en caso de no existir la tabla, la crea y le inserta data
        if(!rows.length) {
            var query = `
            CREATE TABLE payments (
                id VARCHAR(36) PRIMARY KEY,
                order_id VARCHAR(50),
                kind VARCHAR(255),
                method VARCHAR(255),
                external_reference_id TEXT,
                status VARCHAR(255),
                create_at TIMESTAMP NULL,
                update_at TIMESTAMP NULL,
                delete_at TIMESTAMP NULL
            );
            `;

            var promise = poolPayments.promise();

            var [rows,fields] = await promise.query(query);

            console.log("CREATE TABLE payments");

            var query = `
            INSERT INTO payments
            VALUES 
                ('0x7e4ee616fc7111eab8920242ac120008', '0x98e91635fc7011eab8920242ac120008', 'KIND A', 'CREDIT CARD', 'EXTERNAL_ID_001', 'Approved', NOW(), NOW(), NOW())
            ;
            `;

            var promise = poolPayments.promise();

            var [rows,fields] = await promise.query(query);

            console.log("INSERT INTO payments");


        } else {
            console.log("TABLE payments ok");
        }
        

    } catch (error) {
        console.log(error);
    }

})();



(async function restore_db5() {
    try {
        
        var query = `SELECT * 
        FROM information_schema.tables
        WHERE table_schema = 'demo5' 
            AND table_name = 'carts'
        LIMIT 1`;

        var promise = poolCarts.promise();

        var [rows,fields] = await promise.query(query);

        // en caso de no existir la tabla, la crea y le inserta data
        if(!rows.length) {
            var query = `
            CREATE TABLE carts (
                id VARCHAR(36) PRIMARY KEY,
                user_id VARCHAR(36),
                order_id VARCHAR(36),
                created_at TIMESTAMP,
                updated_at TIMESTAMP,
                deleted_at TIMESTAMP
            );
            `;

            var promise = poolCarts.promise();

            var [rows,fields] = await promise.query(query);

            console.log("CREATE TABLE carts");

            var query = `
            INSERT INTO carts
            VALUES 
                ('0x5b456bc2fc6f11eab8920242ac120008', '0x0be8add0fc6f11eab8920242ac120008', '0x98e91635fc7011eab8920242ac120008', NOW(), NOW(), NOW())
            ;
            `;

            var promise = poolCarts.promise();

            var [rows,fields] = await promise.query(query);

            console.log("INSERT INTO carts");


        } else {
            console.log("TABLE carts ok");
        }





        var query = `SELECT * 
        FROM information_schema.tables
        WHERE table_schema = 'demo5' 
            AND table_name = 'cart_items'
        LIMIT 1`;

        var promise = poolCarts.promise();

        var [rows,fields] = await promise.query(query);

        // en caso de no existir la tabla, la crea y le inserta data
        if(!rows.length) {
            var query = `
            CREATE TABLE cart_items (
                id VARCHAR(36) PRIMARY KEY,
                cart_id VARCHAR(36),
                product_id VARCHAR(36),
                quantity INT,
                create_at TIMESTAMP,
                updated_at TIMESTAMP,
                deleted_at TIMESTAMP
            );
            `;

            var promise = poolCarts.promise();

            var [rows,fields] = await promise.query(query);

            console.log("CREATE TABLE cart_items");



            var query = `
            ALTER TABLE cart_items
            ADD CONSTRAINT FK_carts_with_cart_items
            FOREIGN KEY (cart_id)
            REFERENCES carts(id);
            `;

            var promise = poolCarts.promise();

            var [rows,fields] = await promise.query(query);

            console.log("CREATE CONSTRAINT cart_items");



            var query = `
            INSERT INTO cart_items
            VALUES 
                ('0x324c2998fc7211eab8920242ac120008', '0x5b456bc2fc6f11eab8920242ac120008', '0xd7651958fc7111eab8920242ac120008', 2, NOW(), NOW(), NOW()),
                ('0x37be4a4ffc7211eab8920242ac120008', '0x5b456bc2fc6f11eab8920242ac120008', '0xe621216bfc7111eab8920242ac120008', 1, NOW(), NOW(), NOW())
            ;
            `;

            var promise = poolCarts.promise();

            var [rows,fields] = await promise.query(query);

            console.log("INSERT INTO cart_items");


        } else {
            console.log("TABLE cart_items ok");
        }




        

    } catch (error) {
        console.log(error);
    }

})();

