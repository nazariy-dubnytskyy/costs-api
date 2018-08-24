import { Client } from "pg";
import { EntityMetadata } from "../db/entity.metadata";
import { Repository } from "./repository";
import { Cost } from "../entities/cost.entity";

export class CostRepository extends Repository {
  constructor(client: Client) {
    const metadata: EntityMetadata = {
      name: 'Cost',
      tableName: 'costs'
    }

    super(client, metadata);
  }

  async insert(entity: Cost) {
    const query: string = `INSERT INTO ${this.metadata.tableName} (category_id, amount) VALUES ($1, $2)`;
    const values = [entity.categoryId, entity.amount];

    try {
      const res = await this.client.query(query, values)
      console.log(res.rows[0])
    } catch(err) {
      console.log(err.stack)
    }
  }

}