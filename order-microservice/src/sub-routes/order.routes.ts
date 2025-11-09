import express from "express";
import orderController from "../controllers/order.controller.ts";
const app = express.Router();

app.get("/find-all", orderController.findAllOrders);
app.post("/save", orderController.saveOrder);

export default app;