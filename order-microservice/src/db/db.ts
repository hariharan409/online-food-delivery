import { Sequelize } from "sequelize";
import tedious from "tedious";
import createAuthKeyModel from "../models/auth.key.model.ts";
import createOrderModel from "../models/order.model.ts";
import createOrderItemModel from "../models/order.items.model.ts";

const sequelize = new Sequelize(process.env.DB_NAME || "", process.env.DB_USERNAME || "", process.env.DB_PASSWORD || "", {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: "mssql",
  dialectModule: tedious,
  logging: false,
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: false,
    }
  }
});

// Initialize models
const AuthKey = createAuthKeyModel(sequelize);
const Order = createOrderModel(sequelize);
const OrderItem = createOrderItemModel(sequelize);

// Define associations
Order.hasMany(OrderItem, { foreignKey: 'order_id', as: 'order_items' });

// Register all models
const db = {
  sequelize,
  Sequelize,
  AuthKey,
  Order,
  OrderItem
};

export default db;
