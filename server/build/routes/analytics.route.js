"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const analytics_controller_1 = require("../controllers/analytics.controller");
const user_controller_1 = require("../controllers/user.controller");
const analyticsRoute = express_1.default.Router();
analyticsRoute.get("/get-users-analytics", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRole)("admin"), analytics_controller_1.getUsersAnalytics);
analyticsRoute.get("/get-courses-analytics", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRole)("admin"), analytics_controller_1.getCoursesAnalytics);
analyticsRoute.get("/get-orders-analytics", user_controller_1.updateAccessToken, auth_1.isAuthenticated, (0, auth_1.authorizeRole)("admin"), analytics_controller_1.getOrderAnalytics);
exports.default = analyticsRoute;
