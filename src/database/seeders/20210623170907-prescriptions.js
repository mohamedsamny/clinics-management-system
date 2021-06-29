'use strict';
let faker = require('faker');
const { Prescription, Patient, User } = require('../../models')

module.exports = {
  up : async function (queryInterface, Sequelize) {
    let user1 = await User.findOne()
    let user2 = await User.findOne()
    let user3 = await User.findOne()
    let user4 = await User.findOne()


    let patient1 = await Patient.findOne()
    let patient2 = await Patient.findOne()
    let patient3 = await Patient.findOne()
    let patient4 = await Patient.findOne()

    return Prescription.bulkCreate([{
      content : "panadol",
      PatientId: patient1.id,
      UserId : user1.id,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      content : "Aspirin",
      PatientId: patient2.id,
      UserId : user2.id,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      content : "Augmentine",
      PatientId: patient3.id,
      UserId : user3.id,
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      content : "Curam",
      PatientId: patient4.id,
      UserId : user4.id,
      createdAt : new Date(),
      updatedAt : new Date(),
    }]);
  },

  down : function (queryInterface, Sequelize) {
    return Prescription.destroy({
      truncate: true
    })
  }
};
