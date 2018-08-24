import { Client }             from 'pg';

import { CategoryRepository } from '../repositories/category.repository';
import { Repository }         from '../repositories/repository';
import { CostRepository }     from '../repositories/cost.repository';
import { UserRepository }     from '../repositories/user.repository';


export class Connection {
  private client: Client;

  private repositories: Repository[] = [];

  constructor(client: Client) {
    console.log('Connection instance created!');
    this.client = client;

    this.initializeRepositories();
  }

  private initializeRepositories() {
    this.repositories.push(new CategoryRepository(this.client));
    this.repositories.push(new CostRepository(this.client));
    this.repositories.push(new UserRepository(this.client));
  }

  public getRepository(name: string): Repository {
    const repository = this.repositories.find(repository => repository.metadata.name === name);
    if (repository)
        return repository;

    throw Error(`${name}Repository not initialized`);
  }
}