'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.hasMany(models.Prescription, {
        onDelete: 'CASCADE'
      }),
      Patient.hasMany(models.Diagnosis, {
        onDelete: 'CASCADE'
      })
    }
  };
  Patient.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    gender: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};