"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "studentSubjects",
      [
        {
          studentId: 1,
          subjectId: 1,
          score: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 1,
          subjectId: 2,
          score: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 2,
          subjectId: 3,
          score: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 2,
          subjectId: 4,
          score: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 3,
          subjectId: 5,
          score: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 3,
          subjectId: 1,
          score: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 4,
          subjectId: 2,
          score: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          studentId: 4,
          subjectId: 3,
          score: 70,
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
