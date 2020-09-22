const express = require('express');
const app = express();
const port = 1000;

const restore = require('../db/restore');



const routes = {
    orders: require('./routes/orders'),
}


app.use('/api/orders', routes.orders);



app.listen(port, () => {
    console.log(port);
});






