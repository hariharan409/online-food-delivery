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

export default {
  findAllOrders,
  saveOrder,
}