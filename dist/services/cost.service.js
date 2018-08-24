"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cost_entity_1 = require("../entities/cost.entity");
const db_1 = require("../db");
/**
 * Get all costs
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
function getCosts(request, response) {
    const costRepository = db_1.getConnection().getRepository('Cost');
    costRepository.getAll().then((costs) => {
        response.json({ costs });
    });
}
exports.getCosts = getCosts;
/**
 * Create new cost
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
function createCost(request, response) {
    const cost = new cost_entity_1.Cost();
    cost.categoryId = request.body.category_id;
    cost.amount = request.body.amount;
    const costRepository = db_1.getConnection().getRepository('Cost');
    costRepository.insert(cost).then((result) => {
        response.status(201).json({ result });
    });
}
exports.createCost = createCost;
