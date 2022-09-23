import { Injectable } from '@nestjs/common';
import { ExamplePaginationPayloadDto } from '../../dto/example/example.pagination.payload.dto';
import { PaginationOptionsInterface } from '../../interfaces/pagination.options.interface';
import {
  createPaginationOptions,
  createResponsePagination,
} from '../../helpers/pagination.helper';
import { ExampleDbService } from '../../services/db/example.db.service';
import { ExamplePaginationResponseDto } from '../../dto/example/example.pagination.response.dto';

@Injectable()
export class ExampleService {
  constructor(private exampleDbService: ExampleDbService) {}

  async getListExample(
    params: ExamplePaginationPayloadDto,
  ): Promise<ExamplePaginationResponseDto> {
    const pagination: PaginationOptionsInterface =
      createPaginationOptions(params);
    const { data, total } = await this.exampleDbService.listPaginationExample(
      pagination,
      params,
    );
    return createResponsePagination(
      pagination,
      new ExamplePaginationResponseDto(),
      total,
      data,
    );
  }
}
