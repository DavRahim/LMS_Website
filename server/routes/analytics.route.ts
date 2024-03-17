import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrderAnalytics, getUsersAnalytics } from "../controllers/analytics.controller";
import { updateAccessToken } from "../controllers/user.controller";

const analyticsRoute = express.Router();

analyticsRoute.get(
  "/get-users-analytics",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  getUsersAnalytics
);
analyticsRoute.get(
  "/get-courses-analytics",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  getCoursesAnalytics
);
analyticsRoute.get(
  "/get-orders-analytics",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  getOrderAnalytics
);

export default analyticsRoute;
