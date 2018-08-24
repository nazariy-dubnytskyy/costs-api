"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const token_1 = require("../utils/token");
/**
 * Login user
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
function login(request, response) {
    const email = request.body.email;
    const password = request.body.password;
    const userRepository = db_1.getConnection().getRepository('User');
    userRepository.getByEmailAndPassword(email, password).then(user => {
        if (!user) {
            response.status(401);
        }
        token_1.generateToken().then((token) => {
            db_1.getRedisClient().set(token, user.email, 'ex', 3600); // in seconds
            delete user.password;
            response.status(201).json({ token, user });
        })
            .catch(error => {
            response.status(500).json({ error });
        });
    })
        .catch(error => {
        response.status(500).json({ error });
    });
}
exports.login = login;
/**
 * Get all users
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
function getUsers(request, response) {
    const userRepository = db_1.getConnection().getRepository('User');
    const token = request.body.token || request.query.token; // || request.headers['x-access-token'];
    if (!token) {
        response.status(401).json();
    }
    else {
        db_1.getRedisClient().exists(token, (error, reply) => {
            if (error) {
                response.status(401).json();
            }
            if (reply === 1) {
                userRepository.getAll().then(users => {
                    response.status(200).json({ users });
                });
            }
            else {
                response.status(401).json();
            }
        });
    }
}
exports.getUsers = getUsers;
/**
 * Get user by id
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
function getUserById(request, response) {
    const id = request.params.id;
    const userRepository = db_1.getConnection().getRepository('User');
    userRepository.getById(id).then(user => {
        response.json(user);
    });
}
exports.getUserById = getUserById;
