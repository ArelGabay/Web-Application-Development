import express from "express";
const router = express.Router();
import userController from "../controllers/userController";
import multer from "multer";

const upload = multer();

router.get("/:userName", userController.getUserByUsername.bind(userController));
router.get("/id/:id", userController.getUserById.bind(userController));
router.put(
  "/:userName",
  upload.single("profilePicture"),
  userController.updateUser.bind(userController)
);
router.put(
  "/google/:userName",
  upload.single("profilePicture"),
  userController.updateGoogleUser.bind(userController)
);
export default router;
