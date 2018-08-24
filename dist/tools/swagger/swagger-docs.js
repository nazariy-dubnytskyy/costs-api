"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerUi = require("swagger-ui-express");
const SwaggerConstants = require("./swagger-docs.constants");
const glob = require("glob");
class SwaggerDocs {
    // -------------------------------
    //  Public methods
    // -------------------------------
    static initialize(app) {
        const swaggerJSDoc = require('swagger-jsdoc');
        glob("**/*.routes.ts", (er, files) => {
            const options = {
                apis: files,
                swaggerDefinition: {
                    info: {
                        description: SwaggerConstants.API_DESCRIPTION,
                        title: SwaggerConstants.API_TITLE,
                        version: SwaggerConstants.API_VERSION
                    }
                }
            };
            app.use(SwaggerConstants.API_URL, swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
        });
    }
}
exports.SwaggerDocs = SwaggerDocs;
