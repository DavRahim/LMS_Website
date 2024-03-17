import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
import { updateAccessToken } from "../controllers/user.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder)
orderRouter.get(
  "/get-orders",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  getAllOrders
);

export default orderRouter



