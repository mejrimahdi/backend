
const Product = require("../Models/Product")

exports.addProduct=async(req,res)=>{
    try{
        const {name,price,description,imgURL}= req.body;
        if(name.length<2
            ||price<0
        ){
            res.status(400).send({msg:"name not valid"});
        }else{
            const product = new Product({name,price,description,imgURL});
            await product.save();
            res.status(200).send({msg:"product added successfully",product});
        }
    }catch(error){
        res.status(500).send({msg:"error on adding product",error})
        console.log(error);
    }
}

exports.getProducts=async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).send({msg:"products found successsfully",products});
    }catch(error){
        res.status(500).send({msg:"error on getting products",error});
    }
}

exports.getProductById=async(req,res)=>{
    try{
        const {_id} = req.params;
        const product = await Product.find({_id:_id});
        res.status(200).send({msg:"product found successfully",product});
    }catch(error){
        res.status(500).send({msg:"error on getting product",error});
    }
}

exports.deleteProduct=async(req,res)=>{
    try{
        const {_id} = req.params;
        await Product.deleteOne({_id})
        const products = await Product.find();
        res.status(200).send({msg:"product deleted successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on deleting product",error});
    }
}

exports.updateProduct=async(req,res)=>{
    try{
        const {_id} =req.params;
        const {price} = req.body;
        console.log(price);
        const updatedProduct = await Product.updateOne({_id},{$set:{price}});
        const products = await Product.find();
        res.status(200).send({msg:"product updated successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on updating product",error});
    }
}