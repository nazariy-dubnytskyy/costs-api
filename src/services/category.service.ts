import * as pg                from "pg";

import { Request, Response }  from "express";
import { getConnection }      from "../db";
import { Connection }         from "../db/connection";

/**
 * Get all categories
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
export function getCategories(request: Request, response: Response): any {
  const categoryRepository = getConnection().getRepository("Category");

  categoryRepository.getAll().then(categories => {
    response.json({ categories });
  });
}

/**
 * Get category by id
 *
 * @export
 * @param {Request} request
 * @param {Response} response
 */
export function getCategoryById(request: Request, response: Response): any {
  const id: number = request.params.id;
  const categoryRepository = getConnection().getRepository("Category");

  categoryRepository.getById(id).then(category => {
    response.json(category);
  });
}
