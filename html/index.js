const express = require('express');
const app = express();
const port = 1000;

const routes = {
    users: require('./routes/users'),
    orders: require('./routes/orders'),
}


app.use('/api/users', routes.users);
app.use('/api/orders', routes.orders);



app.listen(port, () => {
    console.log(port);
});




