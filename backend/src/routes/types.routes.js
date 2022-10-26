import { getAllTypes, getTypesById, getTypesByName } from "../controllers/types.controller.js";

import { Router } from "express";

const router = Router();

router.get('/', getAllTypes);
router.get('/:id', getTypesById);
router.get('/search/:name', getTypesByName);

export default router;