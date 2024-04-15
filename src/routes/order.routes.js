import { Router } from "express";
import { addOrder, getOrders } from "../controllers/order.controller.js";

export const router = Router();

router.post("/", addOrder);

router.get("/", getOrders);

router.get("/:id", getRecipe );

router.patch('/:id', updateRecipes );

router.delete('/:id', deleteRecipes);


