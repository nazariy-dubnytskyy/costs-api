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
const repository_1 = require("./repository");
class UserRepository extends repository_1.Repository {
    constructor(client) {
        const metadata = {
            name: 'User',
            tableName: 'users'
        };
        super(client, metadata);
    }
    getByEmailAndPassword(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.query(`SELECT * FROM ${this.metadata.tableName} WHERE email=$1 AND password=$2`, [email, password]);
            return response.rows[0];
        });
    }
}
exports.UserRepository = UserRepository;
