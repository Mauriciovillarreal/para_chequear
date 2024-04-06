const express = require('express');
const app = express()

app.use(express.json());
app.use('/api/products', require('./src/routes/products.route'));

app.listen(8080, err => {
    if (err) console.log(err)
    console.log(`escuchando en 8080`);
});