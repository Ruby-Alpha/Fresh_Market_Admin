import { Router } from "express";
import express from "express";

const router = express.Router();

// register route
router.post("/api/users/register", async (req, res, next) => {
    try {
        // add user to database
        const registerResult = await userModel.create(req.body);
        res.status(201).json(registerResult);
    } catch (error) {
        next(error);
    }
});


// Login a user
router.get("/api/users/login", async (req,res,next) => {
    try {
        const user = await userModel.findOne({});
        
    } catch (error) {
        next(error);
    }
});