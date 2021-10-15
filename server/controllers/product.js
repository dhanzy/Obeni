const Product = require('../model/Product');

const getAllProducts = async(req, res) => {
    const qnew = req.query.new;
    const qcategory = req.query.category;
    try{
        let products;
        if (qnew){
            products = await Product.find().sort({createdAt: -1}).limit(5)
        }
        else if (qcategory){
            products = await Product.find({categories: {$in: [qcategory]}})
        }
        else {
            products = await Product.find()
        }
        res.status(200).json({'success':products})
    }
    catch(error){
        res.status(500).json(error)
    }
}

const getProductById = async(req, res) => {
    const productId = req.params.productId
    try{
        const product = await Product.findById(productId);
        res.status(200).json(product)
    }
    catch(error) {
        res.status(500).json(error)
    }
}

const createProduct = async(req, res) => {
    try{
        const product = new Product(req.body)
        const savedProduct = await product.save()
        res.status(201).json({'success':savedProduct})
    }catch(error) {
        res.status(500).json(error)
        console.log(error)
    }
}

const updateProduct = async(req, res) => {
    console.log('Updating Cart')
    try{
        const product = await Product.findByIdAndUpdate(req.params.productId,{
            $set: req.body
        }, {new:true})
        res.status(200).json(product)
    }catch(error) {
        res.status(500).json(error)
    }
}


const deleteProductById = async(req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.productId)
        return res.status(200).json(product)
    }
    catch(error) {
        return res.status(500).json(`Unable to delete product: ${error}`)
    }
}

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProductById }