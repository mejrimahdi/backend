

const express = require("express");
const { addProduct, getProductById, deleteProduct, updateProduct, getProducts } = require("../Controllers/product");

const router = express.Router();

router.post('/addProduct',addProduct);
router.get('/getProduct/:_id',getProductById);
router.delete('/deleteProduct/:_id',deleteProduct);
router.put('/updateProduct/:_id',updateProduct);
router.get('/getProducts',getProducts);

// :.... => on va envoye un parametre dans le url

module.exports=router