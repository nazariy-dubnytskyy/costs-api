import { EntityMetadata } from "../db/entity.metadata";
import { Client, QueryResult } from "pg";

export class Repository {
  readonly metadata: EntityMetadata;

  protected client: Client;

  constructor(client: Client, metadata: EntityMetadata) {
    this.client = client;
    this.metadata = metadata;
  }

  async getById(id: number) {
    const response = await this.client.query(
      `SELECT * FROM ${this.metadata.tableName} WHERE id=$1`,
      [id]
    );

    return response.rows[0];
  }

  async getAll() {
    const { rows } = await this.client.query(
      `SELECT * FROM ${this.metadata.tableName}`
    );

    return rows;
  }

  async insert(entity: any) {}
}
