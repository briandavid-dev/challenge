const { 
    poolUsers,
    //poolOrders,
    //poolPayments,
    //poolCarts,
    //poolProducts
} = require('../database');



module.exports.getOrdersUser = async (req, res) => {
    try {

        // get params
        const { id } = req.params;

        

        // buscamos los ids de las ordenes

        // get connection
        var conn = await poolUsers.getConnection();

        // create a new query
        var query = `SELECT id FROM orders WHERE user_id = '${id}'`;

        // executing the query
        var rows = await conn.query(query);

        Object.keys(rows).map(function(k){
            return rows[k] = "'"+rows[k].id+"'"
        }).join(",");
        
        var orders_ids = rows.toString();

        console.log('orders_ids');
/*
        // buscamos los pagos de acuerdo a los ids de las ordenes del usuario

        // get connection
        var conn = await poolPayments.getConnection();

        // create a new query
        var query = `SELECT * 
                     FROM payments 
                     WHERE order_id IN (${orders_ids}) AND status = 'Approved'`;
        
        // executing the query
        var rows = await conn.query(query);



        // buscamos el carro de compras junto a los items (productos) agregados al mismo

        // get connection
        var conn = await poolCarts.getConnection();

        // create a new query
        var query = `SELECT product_id 
                     FROM carts car 
                        JOIN cart_items cai ON car.id = cai.cart_id 
                     WHERE order_id IN (${orders_ids})`;

        // executing the query
        var rows = await conn.query(query);

        Object.keys(rows).map(function(k){
            return rows[k] = "'"+rows[k].product_id+"'"
        }).join(",");

        var products_ids = rows.toString();



        // buscamos los productos asociados a los items del carro de compras

        // get connection
        var conn = await poolProducts.getConnection();

        // create a new query
        var query = `SELECT * 
                     FROM products
                     WHERE id IN (${products_ids})`;

        // executing the query
        var rows = await conn.query(query);
        


        // response
        res.status(200).json(rows);
     */   
    } 
    catch (error) 
    {
        console.log(error);
        res.json({
            'msg': `Error: ${error.message}`
        });
    }
}





module.exports.getOrdersOrder = async (req, res) => {
    try {

        // get params
        const { id } = req.params;

        

        // buscamos los ids de las ordenes

        // get connection
        var conn = await poolOrders.getConnection();

        // create a new query
        var query = `SELECT id FROM orders WHERE user_id = '${id}'`;

        // executing the query
        var rows = await conn.query(query);

        Object.keys(rows).map(function(k){
            return rows[k] = "'"+rows[k].id+"'"
        }).join(",");
        
        // obtenemos en un string separado por coma y comillas los orders_ids
        var orders_ids = rows.toString();

        

        // buscamos los pagos de acuerdo a los ids de las ordenes del usuario

        // get connection
        var conn = await poolPayments.getConnection();

        // create a new query
        var query = `SELECT * 
                     FROM payments 
                     WHERE order_id IN (${orders_ids}) AND status = 'Approved'`;
        
        // executing the query
        var rows = await conn.query(query);

        // obtenemos los orders_ids filtrados
        var orders_ids = rows.toString();

        // buscamos el carro de compras junto a los items (productos) agregados al mismo

        // get connection
        var conn = await poolCarts.getConnection();

        // create a new query
        var query = `SELECT product_id 
                     FROM carts car 
                        JOIN cart_items cai ON car.id = cai.cart_id 
                     WHERE order_id IN (${orders_ids})`;

        // executing the query
        var rows = await conn.query(query);

        Object.keys(rows).map(function(k){
            return rows[k] = "'"+rows[k].product_id+"'"
        }).join(",");

        var products_ids = rows.toString();



        // buscamos los productos asociados a los items del carro de compras

        // get connection
        var conn = await poolProducts.getConnection();

        // create a new query
        var query = `SELECT * 
                     FROM products
                     WHERE id IN (${products_ids})`;

        // executing the query
        var rows = await conn.query(query);
        


        // response
        res.status(200).json(rows);
        
    } 
    catch (error) 
    {
        res.json({
            'msg': `Error: ${error.message}`
        });
    }
}
