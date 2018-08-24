"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserService = require("../services/user.service");
class UserRoutes {
    static initialize(app) {
        /**
         * @swagger
         * /users/login:
         *   post:
         *     tags:
         *      - User
         *     description:
         *      Login with email & password.
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: Response will contain the authorization token for the user
         *       400:
         *         description: Invalid request
         *       403:
         *         description: Forbidden
         */
        app.post("/users/login", UserService.login);
        /**
         * @swagger
         * /users:
         *   get:
         *     tags:
         *      - User
         *     description:
         *      List of all users.
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: User
         *       400:
         *         description: Invalid request
         *       403:
         *         description: Forbidden
         */
        app.get("/users", UserService.getUsers);
        /**
       * @swagger
       * /users:/id:
       *   get:
       *     tags:
       *      - User
       *     description:
       *      Get User by id
       *     produces:
       *       - application/json
       *     responses:
       *       200:
       *         description: User
       *       400:
       *         description: Invalid request
       *       403:
       *         description: Forbidden
       */
        app.get("/users/:id", UserService.getUserById);
    }
}
exports.UserRoutes = UserRoutes;
