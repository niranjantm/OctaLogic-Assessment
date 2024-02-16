import {DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

const User = sequelize.define("user",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false,
    }

});

export default User;