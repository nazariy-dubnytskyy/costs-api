"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_dev_1 = require("./config.dev");
let config;
function getConfig() {
    if (config) {
        return config;
    }
    switch (process.env.NODE_ENV || 'development') {
        // Overwrite default values for production if required
        case 'production':
            //      config = live;
            break;
        case 'development':
            config = config_dev_1.default;
            break;
        case 'staging':
            //      config = staging;
            break;
    }
    return config;
}
exports.default = getConfig();
