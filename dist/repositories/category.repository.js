"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("./repository");
class CategoryRepository extends repository_1.Repository {
    constructor(client) {
        const metadata = {
            name: 'Category',
            tableName: 'categories'
        };
        super(client, metadata);
    }
}
exports.CategoryRepository = CategoryRepository;
