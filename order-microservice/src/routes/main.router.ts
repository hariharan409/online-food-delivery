import express from "express";
import orderRouter from "../sub-routes/order.routes.ts";
import { authenticateRequest } from "../auth/auth.middleware.ts";
const app = express.Router();

app.get("/", (_, res: any) => res.send({ response: "order microservice api is ready to serve" }).status(200));

app.use(authenticateRequest); // apply auth middleware to all routes below this line

// ✅ Protected routes
app.use("/order", orderRouter);

export default app;
