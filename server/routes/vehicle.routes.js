import express from "express";
import Vehicle from "../model/vehicle.model.js";

const router = express.Router();

router.get("/get/:type",async(req,res,next)=>{
    const {type} = req.params
    try{
        const models = await Vehicle.findAll({where:{vehicle_type:type}}) 
        res.status(200).json(models);
    }catch(error){
        console.log(error)
    }
    
})

router.get("/available",async(req,res,next)=>{
    try{
        const vehicle = await Vehicle.findAll({where:{available:false}})
        res.status(200).json(vehicle);
    }catch(error){
        res.send(400)
    }
})
export default router