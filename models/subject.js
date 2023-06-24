import sequelize from "../config";
import { DataTypes, Model } from "sequelize";

class Subject extends Model {}

Subject.init(
  {
    subjectName: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Subjects",
  }
);

export default Subject;
