import sequelize from "../config";
import { DataTypes, Model } from "sequelize";

class studentSubject extends Model {}

studentSubject.init(
  {
    studentId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "studentSubjects",
  }
);

export default studentSubject;
