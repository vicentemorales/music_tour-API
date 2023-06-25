'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('bands', [
      {
        name: 'The Bands',
        genre: 'Jazz',
        available_start_time: '12:00',
        end_time: '13:00'
      },
      {
        name: 'The Crazy Taxi',
        genre: 'alt Rock',
        available_start_time: '16:00',
        end_time: '17:00'
      },
      {
        name: 'AB/CD',
        genre: 'Kids Rock',
        available_start_time: '17:00',
        end_time: '18:00'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.buldDelete('bands', null, {

    })
  }
};
