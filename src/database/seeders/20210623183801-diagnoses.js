'use strict';
let faker = require('faker');
const { Patient, User, Diagnosis } = require('../../models')

module.exports = {
  up : async function (queryInterface, Sequelize) {
    let user = await User.findOne()
    let patient = await Patient.findOne()
    return Diagnosis.bulkCreate([{
      content : "cancer",
      PatientId: patient.id,
      UserId : user.id,
      createdAt : new Date(),
      updatedAt : new Date(),
    }]);
  },

  down : function (queryInterface, Sequelize) {
    return Diagnosis.destroy({
      truncate: true
    })
  }
};
