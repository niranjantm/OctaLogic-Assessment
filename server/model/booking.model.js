import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

const Booking = sequelize.define("booking",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    vehicle_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    start_date:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    end_date:{
        type:DataTypes.DATEONLY,
        allowNull:false
    }
})

export default Booking;