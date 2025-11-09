import { OrderType } from '../types/order.type.ts';
import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define creation attributes (order_id auto-generated)
interface OrderCreationAttributes extends Optional<OrderType, 'order_id'> {}

class Order extends Model<OrderType, OrderCreationAttributes> implements OrderType {
  public order_id!: string;
  public customer_id!: string;
  public restaurant_id!: string;
  public address_id!: string;
  public order_status!: 'CREATED' | 'CONFIRMED' | 'CANCELLED' | 'FAILED' | 'DELIVERED';
  public order_total!: number;
  public tax_amount!: number;
  public delivery_fee!: number;
  public payment_status?: string;
}

export default function createOrderModel(sequelize: Sequelize): typeof Order {
  Order.init(
    {
      order_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // gen_random_uuid() equivalent
        primaryKey: true,
      },
      customer_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      restaurant_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      address_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      order_status: {
        type: DataTypes.ENUM('CREATED', 'CONFIRMED', 'CANCELLED', 'FAILED', 'DELIVERED'),
        allowNull: false,
        defaultValue: 'CREATED',
      },
      order_total: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
      },
      tax_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      delivery_fee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      payment_status: {
        type: DataTypes.STRING,
        defaultValue: 'PENDING',
      },
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'tbl_orders',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  return Order;
}
