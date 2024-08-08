import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    sku: {
        type: Number,
        required: 'sku is required',
        unique: true
    },
    name: {
        type: String,
        required: 'name is required',
    },
    price: {
        type: Number,
        required: 'Price is required'
    },
    description: {
        type: String,
        required: 'Description is required'
    },
    imageUrl: {
        type: String,
        required: 'Image URL is required'
    },
    alt: {
        type: String,
        required: 'Image alternative text is required'
    }
});

// Create collection
export default mongoose.model('Product', ProductSchema)
// products
