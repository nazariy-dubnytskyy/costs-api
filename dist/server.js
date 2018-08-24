"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const https = require("https");
const routes_1 = require("./routes");
const swagger_docs_1 = require("./tools/swagger/swagger-docs");
class Server {
    constructor() {
        this.initialize();
        this.configure();
        this.initializeRoutes();
        this.createServer();
        this.startServer();
        this.initializeSwaggerDocs();
    }
    initialize() {
        this.app = express();
    }
    configure() {
        this.app.disable('x-powered-by');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    initializeRoutes() {
        routes_1.Routes.initialize(this.app);
    }
    createServer() {
        const sslOptions = {
            key: fs.readFileSync('./ssl/key.pem'),
            cert: fs.readFileSync('./ssl/cert.pem'),
            passphrase: 'ssl4dev'
        };
        this.server = https.createServer(sslOptions, this.app);
    }
    startServer() {
        this.server.listen(3000, () => {
            console.info('  App is running at https://costs.local:%d in %s mode', 3000, this.app.get('env'));
        });
    }
    initializeSwaggerDocs() {
        const swaggerDocs = swagger_docs_1.SwaggerDocs.initialize(this.app);
    }
}
const server = new Server();
