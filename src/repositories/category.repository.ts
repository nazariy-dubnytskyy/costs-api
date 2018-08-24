import { Client } from "pg";
import { EntityMetadata } from "../db/entity.metadata";
import { Repository } from "./repository";

export class CategoryRepository extends Repository {
  constructor(client: Client) {
    const metadata: EntityMetadata = {
      name: 'Category',
      tableName: 'categories'
    }

    super(client, metadata);
  }

}