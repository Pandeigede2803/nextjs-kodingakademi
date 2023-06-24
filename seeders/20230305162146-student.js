"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Students",
      [
        {
          classId: 1,
          name: "John Doe",
          gender: "male",
          address: "Denpasar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 2,
          name: "Jane Doe",
          gender: "female",
          address: "Badung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 3,
          name: "Robert",
          gender: "male",
          address: "Gianyar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          classId: 4,
          name: "Susi",
          gender: "female",
          address: "Tabanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
