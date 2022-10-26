import { Router } from "express";
import { getHealth } from "../controllers/health.controller.js";

const router = Router();
/// https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/#document-your-api-properly
/// https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do
/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Health Checker
 *     description: Retrive our service status.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: available
 */
router.get('/', getHealth);

export default router;