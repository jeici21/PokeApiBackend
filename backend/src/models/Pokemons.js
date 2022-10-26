import { DataTypes } from "sequelize";
import {sequelize} from '../database/config.js';

export const Pokemons = sequelize.define('pokemons', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(140),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    height: {
        type: DataTypes.INTEGER
    },
    weight: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING(200),
        validate: {
            isUrl: true
        }
    }
}, {
    timestamps: false
});