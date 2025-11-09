import { OrderType } from "../types/order.type.ts";
import orderRepository from "../repositories/order.repository.ts";

const findAllOrders = async (): Promise<OrderType[]> => {
    try {
        return await orderRepository.findAllOrders();
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

const saveOrder = async (data: OrderType): Promise<boolean> => {
    try {
        return await orderRepository.saveOrder(data);
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

export default {
    findAllOrders,
    saveOrder,
};