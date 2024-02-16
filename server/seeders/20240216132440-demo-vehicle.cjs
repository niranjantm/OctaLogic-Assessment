'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('vehicles', [
        {
        id:1,
        vehicle_type:"car",
        model:"Tata Altroz",
        type:"Hatchback",
        available:true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id:2,
        vehicle_type:"car",
        model:"Mahindra XUV700",
        type:"Suv",
        available:true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id:3,
        vehicle_type:"car",
        model:"Hyundai Verna",
        type:"Sedan",
        available:true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id:4,
        vehicle_type:"bike",
        model:"Royal Enfield Bullet 350",
        type:"Cruiser",
        available:true,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        id:5,
        vehicle_type:"bike",
        model:"Yamaha R15",
        type:"Sport",
        available:true,
        createdAt:new Date(),
        updatedAt:new Date()
      },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
  }
};
