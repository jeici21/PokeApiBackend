import { getAllTypes, getTypesById, getTypesByName } from "../controllers/types.controller.js";

import { Router } from "express";

const router = Router();

/**
 * @openapi
 * /api/type:
 *   get:
 *     summary: Pokémons Type List
 *     description: Retrive a pokemons type list.
 *     tags:
 *       - Types
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                        id:
 *                          type: integer
 *                          format: int64
 *                          example: 1
 *                        name:
 *                          type: string
 *                          example: "Normal"
 */
router.get('/', getAllTypes);
/**
 * @openapi
 * /api/type/{typeID}:
 *   get:
 *     summary: Find Pokémons type by ID
 *     description: Retrive a pokemons type.
 *     tags:
 *       - Types
 *     parameters:
 *       - name: typeID
 *         in: path
 *         description: ID of pokémon type to return
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
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       format: int64
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "Normal"
 */
router.get('/:id', getTypesById);
/**
 * @openapi
 * /api/type/search/{typeName}:
 *   get:
 *     summary: Find Pokémons type by name
 *     description: Retrive a pokemons type list.
 *     tags:
 *       - Types
 *     parameters:
 *       - name: typeName
 *         in: path
 *         description: Name of pokémon type to return
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                        id:
 *                          type: integer
 *                          format: int64
 *                          example: 1
 *                        name:
 *                          type: string
 *                          example: "Normal"
 */
router.get('/search/:name', getTypesByName);

export default router;