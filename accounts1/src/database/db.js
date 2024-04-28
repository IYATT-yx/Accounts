import config from "../config.js";

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    config.database.databaseName,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: 'mysql'
    }
);

// 单例
let db = null;
export function getDb() {
    if (!db) {
        db = sequelize;
    }
    return db;
}

export default getDb;