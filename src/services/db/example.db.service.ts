import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ExampleEntity from '../../api/database/entities/example.entity';
import { Repository } from 'typeorm';
import { PaginationOptionsInterface } from '../../interfaces/pagination.options.interface';
import { ExamplePaginationPayloadDto } from '../../dto/example/example.pagination.payload.dto';

@Injectable()
export class ExampleDbService {
  constructor(
    @InjectRepository(ExampleEntity)
    private exampleEntity: Repository<ExampleEntity>,
  ) {}

  async listPaginationExample(
    pagination: PaginationOptionsInterface,
    params: ExamplePaginationPayloadDto,
  ): Promise<any> {
    const queryData = this.exampleEntity
      .createQueryBuilder('examples')
      .select([
        'examples.exampleId',
        'examples.firstName',
        'examples.lastName',
        'examples.email',
        'examples.address',
      ])
      .limit(pagination.limit)
      .skip(pagination.skip);
    const [data, total] = await queryData.getManyAndCount();
    return { data, total };
  }
}
