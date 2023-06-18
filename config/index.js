import { Sequelize } from "sequelize";

const dbName = process.env.NEXT_PUBLIC_DB_DATABASE;
const dbUser = process.env.NEXT_PUBLIC_DB_USERNAME;
const dbHost = process.env.NEXT_PUBLIC_DB_HOST;
const dbDriver = process.env.NEXT_PUBLIC_DB_DRIVER;
const dbPassword = process.env.NEXT_PUBLIC_DB_PASSWORD;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  logging: false,
});

export default sequelizeConnection;
