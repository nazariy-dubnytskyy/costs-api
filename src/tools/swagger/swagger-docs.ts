import { Application }            from 'express';
import { readdirSync, statSync }  from 'fs';
import { resolve, join }          from 'path';
import * as swaggerUi             from 'swagger-ui-express';
import * as SwaggerConstants      from './swagger-docs.constants';
import * as glob                  from 'glob';

export class SwaggerDocs {

  // -------------------------------
	//  Public methods
	// -------------------------------

  public static initialize(app: Application): void {
		const swaggerJSDoc = require('swagger-jsdoc');

    glob("**/*.routes.ts", (er, files) => {
      const options: {} = {
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