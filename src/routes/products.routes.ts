import { Router } from 'express';
import productController from '../controllers/productController';

const routerProducts = Router();

routerProducts.post('/', productController.createProduct);
routerProducts.get('/', productController.getAllProducts);

export default routerProducts;