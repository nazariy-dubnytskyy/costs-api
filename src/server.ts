import * as bodyParser  from 'body-parser';
import * as express     from 'express';
import * as fs          from 'fs';
import * as https       from 'https';

import config           from './config';
import { Routes }       from './routes';
import { SwaggerDocs }  from './tools/swagger/swagger-docs';

class Server {
  private app: express.Application;
  private server: https.Server;
  private redisClient: any;

  constructor() {
    this.initialize();

    this.configure();

    this.initializeRoutes();

    this.createServer();

    this.startServer();

    this.initializeSwaggerDocs();
  }

  private initialize() {
    this.app = express();
  }

  private configure() {
    this.app.disable('x-powered-by');
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initializeRoutes() {
    Routes.initialize(this.app);
  }

  private createServer() {
    const sslOptions = {
      key: fs.readFileSync('./ssl/key.pem'),
      cert: fs.readFileSync('./ssl/cert.pem'),
      passphrase: 'ssl4dev'
    };

    this.server = https.createServer(sslOptions, this.app);
  }

  private startServer() {
    this.server.listen(3000, () => {
      console.info(
        '  App is running at https://costs.local:%d in %s mode',
        3000,
        this.app.get('env')
      );
    });
  }

  private initializeSwaggerDocs(): void {
    const swaggerDocs = SwaggerDocs.initialize(this.app);
  }
}

const server = new Server();
