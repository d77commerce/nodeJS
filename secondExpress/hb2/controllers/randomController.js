import express from "express";
import { menuItems } from "../constants.js";

const router = express.Router();

router.get("/random", (req, res) => {
  res.render("random", { menuItems });
});

export default router;
