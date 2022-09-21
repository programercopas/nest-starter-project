import { DataSource, Repository } from 'typeorm';
import ExampleEntity from '../entities/example.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleRepository extends Repository<ExampleEntity> {
  constructor(private datasource: DataSource) {
    super(ExampleEntity, datasource.createEntityManager());
  }
}
