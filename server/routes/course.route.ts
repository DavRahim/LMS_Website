import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  deletedCourse,
  editCourse,
  generateVideoUrl,
  getAllCourses,
  getAllCoursess,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controllers";
import { updateAccessToken } from "../controllers/user.controller";

const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  uploadCourse
);
courseRouter.put(
  "/edit-course/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  editCourse
);
courseRouter.get("/get-course/:id", getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
courseRouter.get("/get-course-content/:id", updateAccessToken, isAuthenticated, getCourseByUser);
courseRouter.put("/add-question",updateAccessToken, isAuthenticated, addQuestion);
courseRouter.put("/add-answer", updateAccessToken, isAuthenticated, addAnswer);
courseRouter.put("/add-review/:id", updateAccessToken, isAuthenticated, addReview);
courseRouter.put("/add-reply/", updateAccessToken, isAuthenticated, authorizeRole("admin"), addReplyToReview);
courseRouter.get(
  "/get-coursess/",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  getAllCoursess
);
courseRouter.post(
  "/getVdoChiperOTP",
  generateVideoUrl
);


courseRouter.delete(
  "/deleted-course/:id",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  deletedCourse
);

export default courseRouter;
