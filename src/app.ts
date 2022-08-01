import express from 'express';
import 'express-async-errors';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';
import OrdersRoutes from './routes/orders.routes';
import LoginRoutes from './routes/login.routes';
import httpErrorHandler from './middlewares/http.erro.middleware';

const app = express();

app.use(express.json());
app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
app.use('/orders', OrdersRoutes);
app.use('/login', LoginRoutes);

app.use(httpErrorHandler);

export default app;
