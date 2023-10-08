import homeController from "./controllers/homeController.js";
import randomController from "./controllers/randomController.js";

import express from "express";
const router = express.Router();

router.use(homeController);
router.use(randomController);
export default router;
