"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
/**
 * Get all categories
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
function getCategories(request, response) {
    const categoryRepository = db_1.getConnection().getRepository("Category");
    categoryRepository.getAll().then(categories => {
        response.json({ categories });
    });
}
exports.getCategories = getCategories;
/**
 * Get category by id
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
function getCategoryById(request, response) {
    const id = request.params.id;
    const categoryRepository = db_1.getConnection().getRepository("Category");
    categoryRepository.getById(id).then(category => {
        response.json(category);
    });
}
exports.getCategoryById = getCategoryById;
