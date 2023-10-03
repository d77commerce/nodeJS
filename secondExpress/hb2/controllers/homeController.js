import express from "express";
import { menuItems } from "../constants.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { menuItems });
});

router.post("/", (req, res) => {
  const { username, password } = req.body;
  // Add your authentication logic here
  // For demonstration purposes, we'll just send a success message
  res.send("Login Successful!");
});

router.get("/contact", (req, res) => {
  res.render("contact", { menuItems });
});

router.get("/services", (req, res) => {
  res.render("services", { menuItems });
});

router.get("/about", (req, res) => {
  res.render("about", { menuItems });
});

export default router;
