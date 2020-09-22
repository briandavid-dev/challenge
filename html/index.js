const express = require('express');
const app = express();
const port = 1000;

const routes = {
    orders: require('./routes/orders'),
}


app.use('/api/orders', routes.orders);



app.listen(port, () => {
    console.log(port);
});




