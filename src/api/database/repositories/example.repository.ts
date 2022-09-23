import { DataSource, Repository } from 'typeorm';
import ExampleEntity from '../entities/example.entity';
import { Injectable } from '@nestjs/common';
import { PaginationOptionsInterface } from '../../../interfaces/pagination.options.interface';

@Injectable()
export class ExampleRepository extends Repository<ExampleEntity> {
  constructor(private datasource: DataSource) {
    super(ExampleEntity, datasource.createEntityManager());
  }

  async listExample(pagination: PaginationOptionsInterface): Promise<any> {
    const queryData = this.createQueryBuilder()
      .take(pagination.limit)
      .skip(pagination.skip);

    const [data, total] = await queryData.getManyAndCount();
    return { data, total };
  }
}
