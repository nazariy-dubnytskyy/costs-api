import { Application, Request, Response } from "express";

import * as CostService                   from "../services/cost.service";

export class CostRoutes {
  public static initialize(app: Application) {
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
