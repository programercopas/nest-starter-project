import {
  Controller,
  Get,
  Param,
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
import {
  ExamplePaginationDataDto,
  ExamplePaginationResponseDto,
} from '../../dto/example/example.pagination.response.dto';

@Controller('example')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Get('')
  async getListExample(
    @Query() params: ExamplePaginationPayloadDto,
  ): Promise<ExamplePaginationResponseDto> {
    return this.exampleService.getListExample(params);
  }

  @Get(':id')
  async findExampleById(
    @Param('id') id: string,
  ): Promise<ExamplePaginationDataDto> {
    return this.exampleService.findExampleById(id);
  }
}
