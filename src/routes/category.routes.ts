import { Application, Request, Response } from "express";

import * as CategoryService 							from "../services/category.service";

export class CategoryRoutes {
  public static initialize(app: Application) {
    /**
     * @swagger
     * /category:
     *   get:
     *     tags:
     *      - Category
     *     description:
     *      List of all categories.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Category
     *       400:
     *         description: Invalid request
     *       403:
     *         description: Forbidden
     */
    app.get("/categories", CategoryService.getCategories);

	  /**
     * @swagger
     * /category:
     *   get:
     *     tags:
     *      - Category
     *     description:
     *      List of all categories.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Category
     *       400:
     *         description: Invalid request
     *       403:
     *         description: Forbidden
     */
    app.get("/categories/:id", CategoryService.getCategoryById);
  }

}
