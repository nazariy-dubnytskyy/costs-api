import { Request, Response }    from 'express';

import { Connection }						from '../db/connection';
import { Cost }                 from '../entities/cost.entity';
import { getConnection }				from '../db';
import { Repository }           from '../repositories/repository';

/**
 * Get all costs
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
export function getCosts(request: Request, response: Response): any {
    const costRepository: Repository = getConnection().getRepository('Cost');

    costRepository.getAll().then((costs) => {
      response.json({costs});
    });
}

/**
 * Create new cost
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
export function createCost(request: Request, response: Response): void {
  const cost: Cost = new Cost();
  cost.categoryId = request.body.category_id;
  cost.amount = request.body.amount;

  const costRepository = getConnection().getRepository('Cost');
  costRepository.insert(cost).then((result) => {
    response.status(201).json({result});

  });
}