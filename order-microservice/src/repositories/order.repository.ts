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

export default {
    findAllOrders,
    saveOrder,
};
