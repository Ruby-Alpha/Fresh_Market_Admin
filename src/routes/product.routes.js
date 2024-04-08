import { Router } from "express";
import { ProductModel } from "../models/productModel.js";
import { adminOnlyRouteMiddleware } from "../middlewares/userAuth.js";

const router = Router();

router.post(
  "/api/product",
  adminOnlyRouteMiddleware,
  async (req, res, next) => {
    try {
      const createProduct = await ProductModel.create(req.body);
      res.status(201).json(createProduct);
    } catch (error) {
      next(error);
    }
  }
);
router.get("/api/product", adminOnlyRouteMiddleware, async (req, res, next) => {
  try {
    const getProduct = await ProductModel.find();
    res.status(200).json(getProduct);
  } catch (error) {
    next(error);
  }
});
router.patch(
  "/api/product/:id",
  adminOnlyRouteMiddleware,
  async (req, res, next) => {
    try {
      const updateByIdProduct = await ProductModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json(updateByIdProduct);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/api/product/:id",
  adminOnlyRouteMiddleware,
  async (req, res, next) => {
    try {
      const getByIdAndDeleteProduct = await ProductModel.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json(getByIdAndDeleteProduct);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
