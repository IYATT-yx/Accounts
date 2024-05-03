import config from "../config.js"

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

export function authenticateDatabase() {
    const p = new Promise((resolve, reject) => {
        sequelize.authenticate()
            .then(() => {
                resolve()
            })
            .catch((err) => {
                reject(err)
            })
    })
    return p
}

export class Accounts extends Sequelize.Model {}
Accounts.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    time: {
        type: Sequelize.DATE,
        allowNull: false
    },
    type: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    account: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    remarks: {
        type: Sequelize.TEXT
    }
}, {
    sequelize: sequelize,
    tableName: 'accounts_tb',
    timestamps: false
});