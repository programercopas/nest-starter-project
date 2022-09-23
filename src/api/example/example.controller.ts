import {
  Controller,
  Get,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExamplePaginationPayloadDto } from '../../dto/example/example.pagination.payload.dto';
import { createPaginationOptions } from '../../helpers/pagination.helper';
import { PaginationOptionsInterface } from '../../interfaces/pagination.options.interface';
import {
  generateStringFilter,
  generateStringOrder,
  transformFilterParameter,
  transformOrderParameter,
} from '../../helpers/repository.helper';

@Controller('example')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Get('list')
  async getListExample(
    @Query() params: ExamplePaginationPayloadDto,
  ): Promise<any> {
    return this.exampleService.getListExample(params);
  }
}
