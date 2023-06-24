import sequelize from "../config";
import { DataTypes, Model } from "sequelize";

class classCategory extends Model {}

classCategory.init(
  {
    className: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "classCategories",
  }
);

export default classCategory;
