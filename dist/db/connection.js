"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_repository_1 = require("../repositories/category.repository");
const cost_repository_1 = require("../repositories/cost.repository");
const user_repository_1 = require("../repositories/user.repository");
class Connection {
    constructor(client) {
        this.repositories = [];
        console.log('Connection instance created!');
        this.client = client;
        this.initializeRepositories();
    }
    initializeRepositories() {
        this.repositories.push(new category_repository_1.CategoryRepository(this.client));
        this.repositories.push(new cost_repository_1.CostRepository(this.client));
        this.repositories.push(new user_repository_1.UserRepository(this.client));
    }
    getRepository(name) {
        const repository = this.repositories.find(repository => repository.metadata.name === name);
        if (repository)
            return repository;
        throw Error(`${name}Repository not initialized`);
    }
}
exports.Connection = Connection;
