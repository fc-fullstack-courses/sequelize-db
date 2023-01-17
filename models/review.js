'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Car, {
        foreignKey: 'carId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Review.init(
    {
      title: {
        type: DataTypes.STRING(300),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      rating: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          isDecimal: true,
          max: 10,
          min: 1,
        },
      },
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews',
      underscored: true,
    }
  );
  return Review;
};
