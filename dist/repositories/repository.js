"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor(client, metadata) {
        this.client = client;
        this.metadata = metadata;
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.query(`SELECT * FROM ${this.metadata.tableName} WHERE id=$1`, [id]);
            return response.rows[0];
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const { rows } = yield this.client.query(`SELECT * FROM ${this.metadata.tableName}`);
            return rows;
        });
    }
    insert(entity) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.Repository = Repository;
