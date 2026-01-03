import { Router } from "express";
import passport from "passport";
import {
  register,
  login,
  status,
  logout,
  setup2fa,
  verify2fa,
  reset2fa,
} from "../controllers/authController.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/status", status);

router.post("/logout", logout);

//2fa setup
router.post("/2fa/setup", setup2fa);

//2fa verify
router.post("/2fa/verify", verify2fa);

//reset
router.post("/2fa/reset", reset2fa);

export default router;
