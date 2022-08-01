import IOrder from '../interfaces/order.interface';
import connection from './connection';

// const getAllOrders = async (): Promise<IOrder[]> => {
// const [results] = await connection.execute(
//   `SELECT orderId as id, userId, p.id as productsIds
//    FROM Trybesmith.Orders as o 
//    JOIN Trybesmith.Products as p 
//    ON o.id = p.orderId`,
// );
// return results as IOrder[];
// };

const getAllOrders = async (): Promise<IOrder[]> => {
  const [results] = await connection.execute('SELECT * FROM Trybesmith.Orders');
  return results as IOrder[];
};

export default {
  getAllOrders,
};