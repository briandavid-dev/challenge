const { 
    //poolUsers,
    poolOrders,
    poolPayments,
    poolCarts,
    poolProducts
} = require('../database');



module.exports.getOrdersUser = async (req, res) => {
    try {

        // get params
        const { id } = req.params;

        

        // 1 buscamos los ids de las ordenes

        // create a new query
        var query = `SELECT id FROM orders WHERE user_id = '${id}'`;

        // now get a Promise wrapped instance of that pool
        var promise = poolOrders.promise();

        // query database using promises
        var [rows,fields] = await promise.query(query);

        Object.keys(rows).map(function(k){
            return rows[k] = "'"+rows[k].id+"'"
        }).join(",");
        
        var orders_ids = rows.toString();

        

        // 2 buscamos los pagos de acuerdo a los ids de las ordenes del usuario

        var query = `SELECT order_id 
                     FROM payments 
                     WHERE order_id IN (${orders_ids}) AND status = 'Approved'`;
        
        var promise = poolPayments.promise();

        var [rows,fields] = await promise.query(query);

        Object.keys(rows).map(function(k){
            return rows[k] = "'"+rows[k].order_id+"'"
        }).join(",");

        var orders_ids = rows.toString();


        
        // 3 buscamos el carro de compras junto a los items (productos) agregados al mismo

        // create a new query
        var query = `SELECT product_id 
                     FROM carts car 
                        JOIN cart_items cai ON car.id = cai.cart_id 
                     WHERE order_id IN (${orders_ids})`;
        
        var promise = poolCarts.promise();

        var [rows,fields] = await promise.query(query);

        Object.keys(rows).map(function(k){
            return rows[k] = "'"+rows[k].product_id+"'"
        }).join(",");

        var products_ids = rows.toString();

        

        // 4 buscamos los productos asociados a los items del carro de compras

        var query = `SELECT * 
                     FROM products
                     WHERE id IN (${products_ids})`;

        var promise = poolProducts.promise();

        var [rows,fields] = await promise.query(query);
        


        // response
        res.status(200).json(rows);
    
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
        const { order_id, ext_ref_id } = req.params;

        

        // 1 buscamos los pagos de acuerdo a los ids de las ordenes del usuario

        var query = `SELECT order_id 
                     FROM payments 
                     WHERE order_id = '${order_id}' AND external_reference_id = '${ext_ref_id}'`;
        
        var promise = poolPayments.promise();

        var [rows,fields] = await promise.query(query);

        Object.keys(rows).map(function(k){
            return rows[k] = "'"+rows[k].order_id+"'"
        }).join(",");

        var orders_ids = rows.toString();


        
        // 2 buscamos el carro de compras junto a los items (productos) agregados al mismo

        // create a new query
        var query = `SELECT product_id 
                     FROM carts car 
                        JOIN cart_items cai ON car.id = cai.cart_id 
                     WHERE order_id IN (${orders_ids})`;
        
        var promise = poolCarts.promise();

        var [rows,fields] = await promise.query(query);

        Object.keys(rows).map(function(k){
            return rows[k] = "'"+rows[k].product_id+"'"
        }).join(",");

        var products_ids = rows.toString();

        

        // 3 buscamos los productos asociados a los items del carro de compras

        var query = `SELECT * 
                     FROM products
                     WHERE id IN (${products_ids})`;

        var promise = poolProducts.promise();

        var [rows,fields] = await promise.query(query);
        


        // response
        res.status(200).json(rows);
    
    } 
    catch (error) 
    {
        console.log(error);
        res.json({
            'msg': `Error: ${error.message}`
        });
    }
}




