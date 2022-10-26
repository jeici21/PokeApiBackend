import { getAllPokemons, getPokemon } from "../controllers/pokemons.controller.js";

import { Router } from "express";

const router = Router();


router.get('/', getAllPokemons);
router.get('/:id', getPokemon);

export default router;