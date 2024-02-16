import express from "express";
import Booking from "../model/booking.model.js";
import Vehicle from "../model/vehicle.model.js";

const router = express();

router.post("/booking/post",async(req,res,next)=>{
    const {user_id,vehicle_id,start_date,end_date} = req.body
    try{
        const vehicle = await Vehicle.findOne({where:{id:vehicle_id}})
        console.log("------------>",vehicle.dataValues.available)
        if(vehicle.dataValues.available){
            const booking = await Booking.create({
                user_id,vehicle_id,start_date,end_date
            })
            await Vehicle.update({available:false},{where:{id:vehicle_id}})
            return res.status(201).json(booking)
        }else{
            return res.status(404).json("Vehicle Already Booked")
        }
        
    }catch(error){
        console.log(error);
    }
})

export default router