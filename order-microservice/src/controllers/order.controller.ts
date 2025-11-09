import { RequestHandler } from "express";
import orderService from "../services/order.service.ts"
import { sendResponse } from "../utils/api.response.ts";

const findAllOrders: RequestHandler = async (req, res) => {
  try {
    const { employee_email } = req.params;
    const result = await orderService.findAllOrders();
    sendResponse({request: req, response: res, statusCode: 200, success: true, message: "find all orders successful", data: result});
  } catch (error: any) {
    sendResponse({request: req, response: res, statusCode: 500, success: false, message: error.message || error, data: null});
  }
};

const saveOrder: RequestHandler = async (req, res) => {
  try {
    const orderData = req.body;
    const result = await orderService.saveOrder(orderData);
    sendResponse({request: req, response: res, statusCode: 200, success: true, message: "save order successful", data: result});
  } catch (error: any) {
    sendResponse({request: req, response: res, statusCode: 500, success: false, message: error.message || error, data: null});
  }
}

const findOneOrderById: RequestHandler = async (req, res) => {
  try {
    const { orderId } = req.params;
    const result = await orderService.findOneOrderById(Number(orderId));
    sendResponse({request: req, response: res, statusCode: 200, success: true, message: "find one order by id successful", data: result});
  } catch (error: any) {
    sendResponse({request: req, response: res, statusCode: 500, success: false, message: error.message || error, data: null});
  }
}

const confirmOrder: RequestHandler = async (req, res) => {
  try {
    const { orderId } = req.params;
    const result = await orderService.confirmOrder(Number(orderId));
    sendResponse({request: req, response: res, statusCode: 200, success: true, message: "confirm order successful", data: result});
  } catch (error: any) {
    sendResponse({request: req, response: res, statusCode: 500, success: false, message: error.message || error, data: null});
  }
}

const cancelOrder: RequestHandler = async (req, res) => {
  try {
    const { orderId } = req.params;
    const result = await orderService.cancelOrder(Number(orderId));
    sendResponse({request: req, response: res, statusCode: 200, success: true, message: "cancel order successful", data: result});
  } catch (error: any) {
    sendResponse({request: req, response: res, statusCode: 500, success: false, message: error.message || error, data: null});
  }
}

const findAllOrdersByCustomerId: RequestHandler = async (req, res) => {
  try {
    const { customerId } = req.params;
    const result = await orderService.findAllOrdersByCustomerId(Number(customerId));
    sendResponse({request: req, response: res, statusCode: 200, success: true, message: "find all orders by customer id successful", data: result});
  } catch (error: any) {
    sendResponse({request: req, response: res, statusCode: 500, success: false, message: error.message || error, data: null});
  }
}

export default {
  findAllOrders,
  saveOrder,
  findOneOrderById,
  confirmOrder,
  cancelOrder,
  findAllOrdersByCustomerId,
}