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
    export const getOneOrder = async(req, res, next) => {
      try {
          const getoneProject = await OrderModel.findById(req.params.id, req.body);
          res.json(getOneOrder)
      } catch (error) {
          next(error)
      }
   }
  
   export const updateOrder = async(req, res, next) => {
      try {
          const updateOrder = await OrderModel.findByIdAndUpdate(req.params.id, req.body);
          res.json(updateOrder)
      } catch (error) {
          
      }
   }
    export const deleteAllOrder = async(req, res, next) => {
      try {
          const deleteAllOrder = await OrderModel.deleteMany();
          res.json(deleteAllOrder)
      } catch (error) {
          next(error)
          
      }
    }
  
    export const deleteAProject = async (req, res, next) => {
     try {
       const deleteOneOrder = await OrderModel.findByIdAndDelete(req.params.id, req.body);
       res.json(deleteOneOrder)
     } catch (error) {
      next(error)
      
     }
       
      };