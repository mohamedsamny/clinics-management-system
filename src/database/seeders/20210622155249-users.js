'use strict';
let faker = require('faker');
const { User } = require('../../models')

module.exports = {
  up : function (queryInterface, Sequelize) {
    return User.bulkCreate([{
      name : faker.name.findName(),
      speciality : 'eye',
      role : 'nurse',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      name : faker.name.findName(),
      speciality : 'nose',
      role : 'Doctor',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      name : faker.name.findName(),
      speciality : 'ear',
      role : 'worker',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      name : faker.name.findName(),
      speciality : 'ear',
      role : 'nurse',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      name : faker.name.findName(),
      speciality : 'git',
      role : 'nurse',
      createdAt : new Date(),
      updatedAt : new Date(),
    }]);
  },

  down : function (queryInterface, Sequelize) {
    return User.destroy({
      truncate: true
    })
  }
};