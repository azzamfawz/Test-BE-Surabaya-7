import express from "express";
const router = express.Router();
import {
  createOrder,
  getOrderByTicketNumber,
} from "../controllers/OrderController.js";

// import { getUserByUsername } from '../controllers/UserController.js';
// import { createUser } from '../controllers/UserController.js';

router.post("/order", createOrder);
router.get("/order/:ticketNumber", getOrderByTicketNumber);

export default router;