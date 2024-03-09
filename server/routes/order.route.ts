import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder)
orderRouter.get(
  "/get-orders",
  isAuthenticated,
  authorizeRole("admin"),
  getAllOrders
);

export default orderRouter



