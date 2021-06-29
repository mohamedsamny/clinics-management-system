'use strict';
let faker = require('faker');
const { Clinic } = require('../../models')

module.exports = {
  up : function (queryInterface, Sequelize) {
    return Clinic.bulkCreate([{
      speciality : 'eye',
      address : faker.address.city(),
      name : faker.name.findName(),
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      speciality : 'ear',
      address : faker.address.city(),
      name : faker.name.findName(),
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      speciality : 'nose',
      address : faker.address.city(),
      name : faker.name.findName(),
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      speciality : 'git',
      address : faker.address.city(),
      name : faker.name.findName(),
      createdAt : new Date(),
      updatedAt : new Date(),
    }]);
  },

  down : function (queryInterface, Sequelize) {
    return Clinic.destroy({
      truncate: true
    })
  }
};