import { Client } from "pg";
import { EntityMetadata } from "../db/entity.metadata";
import { Repository } from "./repository";

export class UserRepository extends Repository {
  constructor(client: Client) {
    const metadata: EntityMetadata = {
      name: 'User',
      tableName: 'users'
    }

    super(client, metadata);
  }

  async getByEmailAndPassword(email: string, password: string) {
    const response = await this.client.query(
      `SELECT * FROM ${this.metadata.tableName} WHERE email=$1 AND password=$2`,
      [email, password]
    );

    return response.rows[0];
  }

}