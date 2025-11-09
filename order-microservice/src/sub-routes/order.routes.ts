import express from "express";
import orderController from "../controllers/order.controller.ts";
const app = express.Router();

app.get("/find-all", orderController.findAllOrders);
app.post("/save", orderController.saveOrder);
app.get("/find-one/:orderId", orderController.findOneOrderById);
app.post("/confirm/:orderId", orderController.confirmOrder);
app.post("/cancel/:orderId", orderController.cancelOrder);
app.get("/find-all-by-customer/:customerId", orderController.findAllOrdersByCustomerId);

export default app;