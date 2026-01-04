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

router.post("/login", passport.authenticate("local"), login);

router.get("/status", status);

router.post("/logout", logout);

//2fa setup
router.post(
  "/2fa/setup",
  (req, res, next) => {
    if (req.isAuthenticated) return next();
    return res.status(401).json({ message: "User Not Logged In" });
  },
  setup2fa
);

//2fa verify
router.post(
  "/2fa/verify",
  (req, res, next) => {
    if (req.isAuthenticated) return next();
    return res.status(401).json({ message: "User Not Logged In" });
  },
  verify2fa
);

//reset
router.post("/2fa/reset", reset2fa);

export default router;
