import express from "express";
import { signup } from "../controllers/auth.controller";

const router = express.Router();

router.get("/signup", signup);

router.get("/login", (reg, res) => {
  res.send("login route");
});

router.get("/logout", (reg, res) => {
  res.send("logout route");
});

export default router;
