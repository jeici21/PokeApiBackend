import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DBUSERNAME,
    process.env.DBPASSWORD,
    {
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        dialect: 'postgres',
    }
);
