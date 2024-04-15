import { Router } from "express";
import { addOrder, deleteAllOrders, deleteAnOrder, getOneOrder, getOrders, updateOrder } from "../controllers/order.controller.js";

 const router = Router();

router.post("/", addOrder);

router.get("/orders", getOrders);

router.get("/:id", getOneOrder);

router.patch('/:id', updateOrder );

router.delete('/orders', deleteAllOrders);
router.delete('/:id', deleteAnOrder);

export default router

