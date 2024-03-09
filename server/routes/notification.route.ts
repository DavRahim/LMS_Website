import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { getNotifications, updateNotification } from "../controllers/notification.controller";
const notificationRouter = express.Router();

notificationRouter.get("/get-all-notifications",isAuthenticated, authorizeRole("admin", ), getNotifications)
notificationRouter.put("/update-notification/:id",isAuthenticated, authorizeRole("admin", ), updateNotification)



export default notificationRouter
