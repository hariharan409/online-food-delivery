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

const findOneOrderById = async (orderId: number): Promise<OrderType | null> => {
    try {
        return await orderRepository.findOneOrderById(orderId);
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

const confirmOrder = async (orderId: number): Promise<boolean> => {
    try {
        return await orderRepository.confirmOrder(orderId);
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

const cancelOrder = async (orderId: number): Promise<boolean> => {
    try {
        return await orderRepository.cancelOrder(orderId);
    } catch (error: any) {
        throw new Error(error.message || error);
    }
}

const findAllOrdersByCustomerId = async (customerId: number): Promise<OrderType[]> => {
    try {
        return await orderRepository.findAllOrdersByCustomerId(customerId);
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