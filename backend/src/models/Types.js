import { DataTypes } from "sequelize";
import {sequelize} from '../database/config.js';

export const Types = sequelize.define('types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(140),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
});