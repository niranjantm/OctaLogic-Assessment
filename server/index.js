import express from "express";
import cors from "cors";
import sequelize from "./db/sequelize.js";
import userRouter from "./routes/user.routes.js"
import vehicleRouter from "./routes/vehicle.routes.js";
import bookingRouter from "./routes/booking.routes.js";



const app = express();

sequelize.sync().then(()=>{
    console.log("connected to postgreSQL DB")
}).catch((e)=>{
    console.log(e);
})

app.use(cors());
app.use(express.json());

app.use("/api",userRouter)
app.use("/api",vehicleRouter);
app.use("/api",bookingRouter)





app.listen(4000,()=>{
    console.log("Server live on port 4000");
})