import { OrderModel } from "../Model/order.model";

export const addOrder = async(req, res, next) => {
    try {
      // add order to the database
      const createResult = await OrderModel.create(req.body);
      // Return response 
      res.json(createResult)
  
    } catch (error) {
     // forward to express error handler
     next(error)
    }
 }

 export const getOrders = async(req, res,next) => {
    try {
      const getAllOrders = await OrderModel.find({});
        res.json(getAllOrders);
    } catch (error) {
      next(error);
      
    }
    }