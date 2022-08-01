import { Router } from 'express';
import orderController from '../controllers/orderController';

const routeOrders = Router();

routeOrders.get('/', orderController.getAllOrders);

export default routeOrders;