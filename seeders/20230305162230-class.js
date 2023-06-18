"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "classCategories",
      [
        {
          className: "Class A",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          className: "Class B",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          className: "Class C",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          className: "Class D",
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
