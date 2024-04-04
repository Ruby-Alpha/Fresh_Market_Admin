import { Router } from "express";

const router = Router();

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
router.post("/api/users/login", async (req, res, next) => {
    try {
        // attempt to login
        const loginResult = await userModel.findOne({email: req.body.email}).exec();
        
        // check if user is already registered
        if (!user) {
            res.status(401).json({message: 'Invalid credentials'});
        }

        // check if email is correct
        if (email != loginResult.email) {
            res.status(401).json({message: 'Incorrect email'});
        }

        // check if password is correct     
        if (password != loginResult.password) {
         res.status(401).json({message: 'Incorrect password'});
        }
      
    } catch (error) {
        res.status(500).json({message: error});
        next(error);
    }
});