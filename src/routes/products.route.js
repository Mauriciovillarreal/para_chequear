const express = require('express');
const { ProductManager } = require("../../productsManager.js")

const router = express.Router();

const productManager = new ProductManager('../../Products.json');

router.get('/', async (req, res) => {

        const limit = req.query.limit;
        const products = await productManager.getProducts();
        if (limit) {
            const limitedProducts = products.slice(0, parseInt(limit));
            return res.send(limitedProducts);
        }
        res.send(products);
        
        console.log(products)
    });
    
// router.get('/:pid', async (req, res) => {
//     try {
//         const { pid } = req.params;
//         const productos = await productManager.getProducts();
//         const product = productos.find(p => p.id === parseInt(pid))
//         res.send(product);
//     } catch (error) {
//         console.log(error)
//     }
// });


module.exports = router;