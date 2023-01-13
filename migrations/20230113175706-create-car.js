'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      manufacturer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modelYear: {
        type: Sequelize.INTEGER,
        field: 'model_year',
      },
      price: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
      },
      isUsed: {
        type: Sequelize.BOOLEAN,
        field: 'is_used',
        allowNull: false,
        defaultValue: false,
      },
      serialNumber: {
        type: Sequelize.STRING(64),
        field: 'serial_number',
        unique: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  },
};
