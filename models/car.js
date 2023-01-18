'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.hasMany(models.Review, {
        foreignKey: 'carId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Car.belongsToMany(models.Seller, {
        through: 'cars_to_sellers',
        foreignKey: 'carId',
      });
    }
  }
  Car.init(
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          isAlphanumeric: true,
          notEmpty: true,
        },
      },
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          isAlpha: true,
          notEmpty: true,
        },
      },
      modelYear: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isNumeric: true,
          notNull: true,
          notEmpty: true,
          isCorrectPrice(newPrice) {
            if (newPrice < 0) {
              throw new Error('Price cannot be this low');
            }
          },
        },
      },
      isUsed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      serialNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: true,
          isAlphanumeric: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Car',
      tableName: 'cars',
      underscored: true,
    }
  );
  return Car;
};
