import { DataTypes } from "sequelize";
// local model
import {Pokemons} from "./Pokemons.js"
import { sequelize } from "../database/config.js";

export const PokemonsEvolve = sequelize.define('pokemons_evolve', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fromPokemonId: {
        type: DataTypes.INTEGER,
        references: {
            model: Pokemons, // 'Pokemons' would also work
            key: 'id'
        }
    },
    toPokemonId: {
        type: DataTypes.INTEGER,
        references: {
            model: Pokemons, // 'Pokemons' would also work
            key: 'id'
        }
    },
}, {
    timestamps: false
})

/// Pokemons.belongsToMany(Pokemons, { as: 'fromPokemonId', through: PokemonsEvolve });
/// Pokemons.belongsToMany(Pokemons, { as: 'toPokemonId', through: PokemonsEvolve });