"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CostService = require("../services/cost.service");
class CostRoutes {
    static initialize(app) {
        /**
         * @swagger
         * /cost:
         *   get:
         *     tags:
         *      - Cost
         *     description: List of all costs
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: Cost
         *       400:
         *         description: Invalid request
         *       403:
         *         description: Forbidden
         */
        app.get("/costs", CostService.getCosts);
        /**
         * @swagger
         * /cost:
         *   post:
         *     tags:
         *      - Cost
         *     description: Create new cost
         *     produces:
         *       - application/json
         *     parameters:
         *       - category_id: id of the category cost belongs to
         *         amount: Cost amount
         *     responses:
         *       200:
         *         description: cost
         */
        app.post("/costs", CostService.createCost);
    }
}
exports.CostRoutes = CostRoutes;
