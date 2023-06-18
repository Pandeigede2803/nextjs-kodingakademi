import sequelize from "../config";
import { DataTypes, Model } from "sequelize";

class Student extends Model {}

Student.init(
  {
    classId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Students",
  }
);

export default Student;
