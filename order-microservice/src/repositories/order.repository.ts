import { OrderType } from "../types/order.type.ts";
import db from "../db/db.ts";

const findAllOrders = async(): Promise<OrderType[]> => {
    try {
        const orderList = db.Order.findAll();
        return orderList;
    } catch (error: any) {
        throw new Error(error.message || error);
    }
};

const saveOrder = async(data: OrderType): Promise<boolean> => {
    try {
        await db.Order.upsert(data);
        return true;
    } catch (error: any) {
        throw new Error(error.message || error);
    }
};

const findOneOrderById = async(orderId: number): Promise<OrderType | null> => {
    try {
        const order = await db.Order.findByPk(orderId);
        return order;
    } catch (error: any) {
        throw new Error(error.message || error);
    }
};

const confirmOrder = async(orderId: number): Promise<boolean> => {
    try {
        const order = await db.Order.findByPk(orderId);
        if (!order) throw new Error("Order not found");
        order.order_status = "CONFIRMED";
        await order.save();
        return true;
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

const cancelOrder = async(orderId: number): Promise<boolean> => {
    try {
        const order = await db.Order.findByPk(orderId);
        if (!order) throw new Error("Order not found");
        order.order_status = "CANCELLED";
        await order.save();
        return true;
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

const findAllOrdersByCustomerId = async(customerId: number): Promise<OrderType[]> => {
    try {
        const orderList = await db.Order.findAll({ where: { customer_id: customerId } });
        return orderList;
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

export default {
    findAllOrders,
    saveOrder,
    findOneOrderById,
    confirmOrder,
    cancelOrder,
    findAllOrdersByCustomerId,
};
