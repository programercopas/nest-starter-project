import { Injectable } from '@nestjs/common';
import { ExamplePaginationPayloadDto } from '../../dto/example/example.pagination.payload.dto';
import { PaginationOptionsInterface } from '../../interfaces/pagination.options.interface';
import {
  createPaginationOptions,
  createResponsePagination,
} from '../../helpers/pagination.helper';
import { ExampleDbService } from '../../services/db/example.db.service';
import {
  ExamplePaginationDataDto,
  ExamplePaginationResponseDto
} from '../../dto/example/example.pagination.response.dto';

@Injectable()
export class ExampleService {
  constructor(private exampleDbService: ExampleDbService) {}

  async getListExample(
    params: ExamplePaginationPayloadDto,
  ): Promise<ExamplePaginationResponseDto> {
    const pagination: PaginationOptionsInterface =
      createPaginationOptions(params);
    const { res, total } = await this.exampleDbService.listPaginationExample(
      pagination,
      params,
    );
    return createResponsePagination(
      pagination,
      new ExamplePaginationResponseDto(),
      total,
      res,
    );
  }

  async findExampleById(id: string): Promise<ExamplePaginationDataDto> {
    return this.exampleDbService.findExampleById(id);
  }
}
