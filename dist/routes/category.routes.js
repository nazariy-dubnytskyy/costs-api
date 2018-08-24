"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryService = require("../services/category.service");
class CategoryRoutes {
    static initialize(app) {
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
exports.CategoryRoutes = CategoryRoutes;
