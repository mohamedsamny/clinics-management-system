'use strict';
let faker = require('faker');
const { Patient } = require('../../models')

module.exports = {
  up : function (queryInterface, Sequelize) {
    return Patient.bulkCreate([{
      name : faker.name.findName(),
      age: faker.datatype.number({ 'min': 1, 'max': 80 }),
      address : faker.address.city(),
      createdAt : new Date(),
      updatedAt : new Date(),
      gender : faker.name.gender(true)
    },{
      name : faker.name.findName(),
      age: faker.datatype.number({ 'min': 1, 'max': 80 }),
      address : faker.address.city(),
      createdAt : new Date(),
      updatedAt : new Date(),
      gender : faker.name.gender(true)
    },{
      name : faker.name.findName(),
      age: faker.datatype.number({ 'min': 1, 'max': 80 }),
      address : faker.address.city(),
      createdAt : new Date(),
      updatedAt : new Date(),
      gender : faker.name.gender(true)
    },{
      name : faker.name.findName(),
      age: faker.datatype.number({ 'min': 1, 'max': 80 }),
      address : faker.address.city(),
      createdAt : new Date(),
      updatedAt : new Date(),
      gender : faker.name.gender(true)
    }]);
  },

  down : function (queryInterface, Sequelize) {
    return Patient.destroy({
      truncate: true
    })
  }
};
