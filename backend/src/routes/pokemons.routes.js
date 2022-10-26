import { getAllPokemons, getPokemon } from "../controllers/pokemons.controller.js";

import { Router } from "express";

const router = Router();

/**
 * @openapi
 * /api/pokemons/:
 *   get:
 *     summary: Pokémons List
 *     description: Retrive a pokemon list.
 *     tags:
 *       - Pokémons
 *     parameters:
 *       - name: limit
 *         in: query
 *         description: Limit for pagination
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *       - name: offset
 *         in: query
 *         description: offset for pagination
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                    type: array
 *                    items:
 *                         type: object
 *                         properties:
 *                                id:
 *                                  type: integer
 *                                  format: int64
 *                                  example: 1
 *                                name:
 *                                  type: string
 *                                  example: "Bulbasaur"
 *                                description:
 *                                  type: string
 *                                  example: "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.\n\nIt evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.\n\nAlong with Charmander and Squirtle, Bulbasaur is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen. "
 *                                image:
 *                                  type: string
 *                                  example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 */
router.get('/', getAllPokemons);
/**
 * @openapi
 * /api/pokemons/{pokemonID}:
 *   get:
 *     summary: Find Pokémon by ID
 *     description: Retrive our service status.
 *     tags:
 *       - Pokémons
 *     parameters:
 *       - name: pokemonID
 *         in: path
 *         description: ID of pokémon to return
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                    type: object
 *                    properties:
 *                       id:
 *                         type: integer
 *                         format: int64
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Bulbasaur"
 *                       description:
 *                         type: string
 *                         example: "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.\n\nIt evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.\n\nAlong with Charmander and Squirtle, Bulbasaur is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen. "
 *                       height:
 *                         type: integer
 *                         format: int64
 *                         example: 7
 *                       weight:
 *                         type: integer
 *                         format: int64
 *                         example: 69
 *                       image:
 *                         type: string
 *                         example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 *                       "type":
 *                         type: array
 *                         items:
 *                             type: object
 *                             properties:
 *                                id:
 *                                  type: integer
 *                                  format: int64
 *                                  example: 4
 *                                name:
 *                                  type: string
 *                                  example: "Poison"
 *                       evolve:
 *                         type: array
 *                         items:
 *                             type: object
 *                             properties:
 *                                id:
 *                                  type: integer
 *                                  format: int64
 *                                  example: 2
 *                                name:
 *                                  type: string
 *                                  example: "Ivysaur"
 *                                image:
 *                                  type: string
 *                                  example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
 */
router.get('/:id', getPokemon);

export default router;