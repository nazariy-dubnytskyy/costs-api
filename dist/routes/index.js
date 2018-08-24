"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_routes_1 = require("./category.routes");
const cost_routes_1 = require("./cost.routes");
const user_routes_1 = require("./user.routes");
class Routes {
    static initialize(app) {
        category_routes_1.CategoryRoutes.initialize(app);
        cost_routes_1.CostRoutes.initialize(app);
        user_routes_1.UserRoutes.initialize(app);
    }
}
exports.Routes = Routes;
