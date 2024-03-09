import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  deletedCourse,
  editCourse,
  getAllCourses,
  getAllCoursess,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controllers";

const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRole("admin"),
  uploadCourse
);
courseRouter.put(
  "/edit-course/:id",
  isAuthenticated,
  authorizeRole("admin"),
  editCourse
);
courseRouter.get("/get-course/:id", getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseByUser);
courseRouter.put("/add-question", isAuthenticated, addQuestion);
courseRouter.put("/add-answer", isAuthenticated, addAnswer);
courseRouter.put("/add-review/:id", isAuthenticated, addReview);
courseRouter.put("/add-reply/", isAuthenticated, authorizeRole("admin"), addReplyToReview);
courseRouter.get(
  "/get-coursess/",
  isAuthenticated,
  authorizeRole("admin"),
  getAllCoursess
);
courseRouter.delete(
  "/deleted-course/:id",
  isAuthenticated,
  authorizeRole("admin"),
  deletedCourse
);

export default courseRouter;
