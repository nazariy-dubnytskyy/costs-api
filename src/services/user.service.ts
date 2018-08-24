import * as pg                            from 'pg';

import { Request, Response }              from 'express';
import { getConnection, getRedisClient }  from '../db';
import { Connection }                     from '../db/connection';
import { generateToken }                  from '../utils/token';
import { UserRepository } from '../repositories/user.repository';


/**
 * Login user
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
export function login(request: Request, response: Response): any {
  const email: string = request.body.email;
  const password: string = request.body.password;

  const userRepository: UserRepository = getConnection().getRepository('User') as UserRepository;

  userRepository.getByEmailAndPassword(email, password).then(user => {
    if (!user) {
      response.status(401);
    }

    generateToken().then((token: string) => {
      getRedisClient().set(token, user.email, 'ex', 3600); // in seconds
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

/**
 * Get all users
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
export function getUsers(request: Request, response: Response): any {
  const userRepository = getConnection().getRepository('User');
  const token = request.body.token || request.query.token;// || request.headers['x-access-token'];

  if (!token) {
    response.status(401).json();
  } else {

    getRedisClient().exists(token, (error, reply) => {
      if (error) {
        response.status(401).json();
      }
      if (reply === 1) {
        userRepository.getAll().then(users => {
          response.status(200).json({ users });
        });
      } else {
        response.status(401).json();
      }
    });
  }
}

/**
 * Get user by id
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
export function getUserById(request: Request, response: Response): any {
  const id: number = request.params.id;
  const userRepository = getConnection().getRepository('User');

  userRepository.getById(id).then(user => {
    response.json(user);
  });
}
