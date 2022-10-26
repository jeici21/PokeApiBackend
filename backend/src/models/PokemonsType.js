import { DataTypes } from "sequelize";
// Local Models
import { Pokemons } from "./Pokemons.js";
import { Types } from "./Types.js";
import {sequelize} from '../database/config.js';

export const PokemonsType = sequelize.define('pokemons_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pokemonId: {
        type: DataTypes.INTEGER,
        references: {
            model: Pokemons, // 'Pokemons' would also work
            key: 'id'
        }
    },
    typeId: {
        type: DataTypes.INTEGER,
        references: {
            model: Types, // 'Types' would also work
            key: 'id'
        }
    }
}, {
    timestamps: false
});

// Relationship
Pokemons.belongsToMany(Types, { through: PokemonsType });
Types.belongsToMany(Pokemons, { through: PokemonsType });