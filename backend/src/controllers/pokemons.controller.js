import { Op } from 'sequelize';
// Models
import {Pokemons} from '../models/Pokemons.js';
import {PokemonsEvolve} from '../models/PokemonsEvolve.js';
import {PokemonsType} from '../models/PokemonsType.js';
import {Types} from '../models/Types.js';

export const getAllPokemons = async(req, res) => {
    try {
        let limit = req.query.limit;
        let offset = req.query.offset;
        if (limit === undefined && offset === undefined) {
            limit = 10;
            offset = 0;
        }

        const pokemons = await Pokemons.findAll({
            attributes: [
                'id',
                'name',
                'description',
                'image'
            ],
            offset: offset, limit: limit
        });
        res.setHeader('Content-Type', 'application/json');
        res.json({data: pokemons});
    } catch (error) {
        console.log(error.message); // loggin error
        return res.status(500).json({
            status_code: 500,
            type: error.name,
            message: error.message
        });
    }
}

export const getPokemon = async(req, res) => {
    try {
        const pk = req.params.id;
        const pokemon = await Pokemons.findByPk(pk);
        let pokemon_result = JSON.parse(JSON.stringify(pokemon));

        /**
         * Pokemon Types
         */
        const pokemon_types_ids = await PokemonsType.findAll({
            attributes: ['typeId'],
            where: {
                pokemonId: {
                    [Op.eq]: pk
                }
            }
        })
        const types_id_data = JSON.parse(JSON.stringify(pokemon_types_ids));
        const types_ids = types_id_data.map((value, index, array) => {
            return value.typeId;
        });
        const type = await Types.findAll({
            attributes: [
                'id',
                'name',
            ],
            where: {
                id: {
                    [Op.in]: types_ids
                }
            }
        });

        /**
         * Pokemon Evolves
         */
        const pokemons_evolves = await PokemonsEvolve.findAll({
            attributes: [
                'toPokemonId'
            ],
            where: {
                fromPokemonId: pk
            }
        });
        const pokemons_evolves_data = JSON.parse(JSON.stringify(pokemons_evolves));
        const pokemon_evolves_ids = pokemons_evolves_data.map((value, index, array) => {
            return value.toPokemonId;
        });
        const pokemon_evolves = await Pokemons.findAll({
            attributes: [
                'id',
                'name',
                'image'
            ],
            where: {
                id: {
                    [Op.in]: pokemon_evolves_ids
                }
            }
        });

        // add types and evolves into result
        pokemon_result.type = type;
        pokemon_result.evolve = pokemon_evolves;

        res.setHeader('Content-Type', 'application/json');
        res.json({data: pokemon_result});
    } catch (error) {
        console.log(error.message); // loggin error
        return res.status(500).json({
            status_code: 500,
            type: error.name,
            message: error.message
        });
    }
}