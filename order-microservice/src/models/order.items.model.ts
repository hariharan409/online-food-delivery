import { OrderItemType } from '../types/order.items.type.ts';
import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define creation attributes (order_item_id auto-generated)
interface OrderItemCreationAttributes extends Optional<OrderItemType, 'order_item_id'> {}

class OrderItem extends Model<OrderItemType, OrderItemCreationAttributes> implements OrderItemType {
  public order_item_id!: string;
  public order_id!: string;
  public item_id!: string;
  public unit_price!: number;
  public quantity!: number;
  public line_total!: number;
}

export default function createOrderItemModel(sequelize: Sequelize): typeof OrderItem {
  OrderItem.init(
    {
      order_item_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // gen_random_uuid() equivalent
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      item_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      unit_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      line_total: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'OrderItem',
      tableName: 'tbl_order_items',
      timestamps: false, // no created_at or updated_at fields
    }
  );

  return OrderItem;
}