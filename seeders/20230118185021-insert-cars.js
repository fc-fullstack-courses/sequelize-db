'use strict';

/** @type {import('sequelize-cli').Migration} */

const cars = [
  {
    model: 'Test',
    manufacturer: 'Test Manuf',
    model_year: 2020,
    price: 45000,
    is_used: false,
    serial_number: 'XT2314',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cars', cars);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'cars',
      { serial_number: cars[0].serial_number },
      {}
    );
  },
};
