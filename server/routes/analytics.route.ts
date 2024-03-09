import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrderAnalytics, getUsersAnalytics } from "../controllers/analytics.controller";

const analyticsRoute = express.Router();

analyticsRoute.get(
  "/get-users-analytics",
  isAuthenticated,
  authorizeRole("admin"),
  getUsersAnalytics
);
analyticsRoute.get(
  "/get-courses-analytics",
  isAuthenticated,
  authorizeRole("admin"),
  getCoursesAnalytics
);
analyticsRoute.get(
  "/get-orders-analytics",
  isAuthenticated,
  authorizeRole("admin"),
  getOrderAnalytics
);

export default analyticsRoute;
