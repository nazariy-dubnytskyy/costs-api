import { Client, Pool }     from 'pg';
import * as redis           from 'redis';

import config               from '../config';
import { Connection }       from './connection';

const pool = new Pool(config.db);

let connection: Connection;
let redisClient = redis.createClient();

pool.on('connect', (client: Client) => {
  console.info('Connected throuth the pool, client processID = ', client['processID']);
});

pool.on('error', (error: Error, client: Client) => {
  console.error('Unexpected error on idle client', error);
})

pool.connect((error: Error, client: Client, done) => {
  if (error) throw error;
  connection = new Connection(client);
});

redisClient.on('connect', () => {
  console.info('Connected to redis');
});

redisClient.on('error', (error) => {
  console.error('Error when trying to connect to redis: ', error);
});

export function getConnection(): Connection {
  return connection;
}

export function getRedisClient() {
  return redisClient;
}