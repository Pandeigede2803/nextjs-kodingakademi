import Student from "./student";
import Class from "./classcategory";
import StudentSubject from "./studentsubject";
import Subject from "./subject";

//student belongs to class
Student.belongsTo(Class, {
  sourceKey: "id",
  foreignKey: "classId",
  as: "class",
});

//class has many students
Class.hasMany(Student, {
  sourceKey: "id",
  foreignKey: "classId",
  as: "students",
});

//student has many studentsubject
Student.hasMany(StudentSubject, {
  sourceKey: "id",
  foreignKey: "studentId",
  as: "studentsubjects",
});

//studentsubject belongs to student
StudentSubject.belongsTo(Student, {
  sourceKey: "id",
  foreignKey: "studentId",
  as: "student",
});

//subject has many studentsubject
Subject.hasMany(StudentSubject, {
  sourceKey: "id",
  foreignKey: "subjectId",
  as: "subjectstudents",
});

//studentsubject belongs to subject
StudentSubject.belongsTo(Subject, {
  sourceKey: "id",
  foreignKey: "subjectId",
  as: "subject",
});

export { Student, Class, StudentSubject, Subject };
