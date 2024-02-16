import {Sequelize} from "sequelize";

const sequelize = new Sequelize("octaLogic_assessment_niranjan","postgres","niranjan",{
    host:"localhost",
    dialect:"postgres"
    
})

export default sequelize;