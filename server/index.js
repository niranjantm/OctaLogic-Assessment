import express from "express";
import cors from "cors";
import sequelize from "./db/sequelize.js";
import userRouter from "./routes/user.routes.js"



const app = express();

sequelize.sync().then(()=>{
    console.log("connected to postgreSQL DB")
}).catch((e)=>{
    console.log(e);
})

app.use(cors());
app.use(express.json());

app.use("/api",userRouter)





app.listen(4000,()=>{
    console.log("Server live on port 4000");
})