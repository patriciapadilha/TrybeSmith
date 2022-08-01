import orderModel from '../models/orderModel';
import productModel from '../models/productModel';
// import IOrder from '../interfaces/order.interface';

const getAllOrders = async (): Promise<Array<object>> => {
  const orders = await orderModel.getAllOrders();
  const products = await productModel.getAllProducts();

  const OrdersAndProducts = orders.map((el) => {
    const productsIds = products.filter((order) => order.orderId === el.id)
      .map((product) => product.id);
    return { id: el.id, userId: el.userId, productsIds };
  });
  console.log(typeof OrdersAndProducts, OrdersAndProducts);
  return OrdersAndProducts;
};

export default {
  getAllOrders,
};