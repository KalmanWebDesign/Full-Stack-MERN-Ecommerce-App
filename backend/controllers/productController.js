import Product from '../models/productModel';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
};

export const addProduct = async (req, res) => {
    let newProduct = new Product(req.body);

    try {
        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        res.send(err);
    }
};

export const deleteProduct = async (req,res) => {
    try {
        await Product.deleteOne({_id: req.params.ProductId});
        res.json({message: 'Product deleted'});
    } catch (err) {
        res.send(err);
    }
};