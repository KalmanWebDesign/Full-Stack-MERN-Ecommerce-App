import {
    getProducts,
    addProduct,
    deleteProduct
} from '../controllers/productController';

const routes = (app) => {
    app.route('/products')
        .get(getProducts)
        .post(addProduct)

    app.route('/products/:ProductId')
        .delete(deleteProduct)
}

export default routes;