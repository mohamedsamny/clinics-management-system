'use strict';
let faker = require('faker');
const { Patient, Clinic, Appointment } = require('../../models')

module.exports = {
  up : async function (queryInterface, Sequelize) {
    let clinic = await Clinic.findOne()
    let patient = await Patient.findOne()
    return Appointment.bulkCreate([{
      content : "meet on date ",
      date: new Date(),
      ClinicId : clinic.id,
      PatientId: patient.id,
      createdAt : new Date(),
      updatedAt : new Date(),
    }]);
  },

  down : function (queryInterface, Sequelize) {
    return Appointment.destroy({
      truncate: true
    })
  }
};
