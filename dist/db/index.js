"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const redis = require("redis");
const config_1 = require("../config");
const connection_1 = require("./connection");
const pool = new pg_1.Pool(config_1.default.db);
let connection;
let redisClient = redis.createClient();
pool.on('connect', (client) => {
    console.info('Connected throuth the pool, client processID = ', client['processID']);
});
pool.on('error', (error, client) => {
    console.error('Unexpected error on idle client', error);
});
pool.connect((error, client, done) => {
    if (error)
        throw error;
    connection = new connection_1.Connection(client);
});
redisClient.on('connect', () => {
    console.info('Connected to redis');
});
redisClient.on('error', (error) => {
    console.error('Error when trying to connect to redis: ', error);
});
function getConnection() {
    return connection;
}
exports.getConnection = getConnection;
function getRedisClient() {
    return redisClient;
}
exports.getRedisClient = getRedisClient;
