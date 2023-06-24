"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Subjects",
      [
        {
          subjectName: "Math",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectName: "Science",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectName: "English",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectName: "History",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectName: "Geography",
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
