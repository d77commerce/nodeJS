import express from "express";
import { menuItems } from "../constants.js";

const router = express.Router();

router.get("/", (req, res) => {
  const title = "Home";
  res.render("home", { menuItems,title });
});

router.get("/login", (req, res) => {
  const title ="Login";
  res.render("login", { menuItems ,title});
});
router.post("/login", (req, res) => {
  // to do login
  res.redirect("secrets");
});

router.get("/register", (req, res) => {
  const title ="Register";
  res.render("register", { menuItems ,title});
});

router.post("/register", (req, res) => {
  const title ="Register";
  res.render("register", { menuItems ,title});
});


router.post("/", (req, res) => {
  const { username, password } = req.body;
  // Add your authentication logic here
  // For demonstration purposes, we'll just send a success message
  res.send("FAKE Login Successful!");
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
router.get("/secrets", (req, res) => {
  const title ="Secrets";
  res.render("secrets", { menuItems ,title});
});
router.get("/submit", (req, res) => {
  const title ="Submit";
  res.render("submit", { menuItems ,title});
});

router.post("/submit", (req, res) => {
  const {secret}= req.body
  const title ="Submit";
  res.send(secret);
});

export default router;
