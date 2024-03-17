import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { getNotifications, updateNotification } from "../controllers/notification.controller";
import { updateAccessToken } from "../controllers/user.controller";
const notificationRouter = express.Router();

notificationRouter.get("/get-all-notifications", updateAccessToken, isAuthenticated, authorizeRole("admin",), getNotifications)
notificationRouter.put("/update-notification/:id", updateAccessToken, isAuthenticated, authorizeRole("admin",), updateNotification)



export default notificationRouter
