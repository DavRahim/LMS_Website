import express from "express";
import {
  activateUser,
  deletedUser,
  getAllUsers,
  getUserInfo,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
  updateUserRole,
} from "../controllers/user.controller";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/active-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", updateAccessToken,  isAuthenticated, logoutUser);

userRouter.get("/refresh-token", updateAccessToken);

userRouter.get("/me", updateAccessToken, isAuthenticated, getUserInfo);

userRouter.post("/socialAuth", socialAuth)

userRouter.put("/update-user-info",updateAccessToken, isAuthenticated, updateUserInfo)

userRouter.put("/update-user-password",updateAccessToken, isAuthenticated, updatePassword);
userRouter.put("/update-user-avatar",updateAccessToken, isAuthenticated, updateProfilePicture);
userRouter.get(
  "/get-users",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  getAllUsers
);
userRouter.put(
  "/update-user",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  updateUserRole
);
userRouter.delete(
  "/delete-user/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  deletedUser
);

export default userRouter;
