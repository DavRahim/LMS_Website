import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModal from "../models/order.model";

// create new order
export const newOrder = CatchAsyncError(
  async (data: any, res: Response, next: NextFunction) => {
    const order = await OrderModal.create(data);
    res.status(201).json({
      success: true,
      order,
    });
  }
);

// get all users

export const getAllOrdersService = async (res: Response) => {
  const orders = await OrderModal.find().sort({ createdAt: -1 });
  res.status(201).json({
    success: true,
    orders,
  });
};
