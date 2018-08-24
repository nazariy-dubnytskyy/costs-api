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
class CostRepository extends repository_1.Repository {
    constructor(client) {
        const metadata = {
            name: 'Cost',
            tableName: 'costs'
        };
        super(client, metadata);
    }
    insert(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO ${this.metadata.tableName} (category_id, amount) VALUES ($1, $2)`;
            const values = [entity.categoryId, entity.amount];
            try {
                const res = yield this.client.query(query, values);
                console.log(res.rows[0]);
            }
            catch (err) {
                console.log(err.stack);
            }
        });
    }
}
exports.CostRepository = CostRepository;
