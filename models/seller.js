'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seller.belongsToMany(models.Car, {
        through: 'cars_to_sellers',
        foreignKey: 'sellerId',
      });
    }
  }
  Seller.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, notEmpty: true },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, notEmpty: true },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: 'Seller',
      tableName: 'sellers',
      underscored: true,
    }
  );
  return Seller;
};
