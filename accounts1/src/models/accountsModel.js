
import { Sequelize } from "sequelize";
import getDb from "../database/db.js";

const db = await getDb();

class Accounts extends Sequelize.Model {}
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
    sequelize: db,
    tableName: 'accounts_tb',
    timestamps: false
});

export default Accounts;