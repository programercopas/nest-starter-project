import {
  Controller,
  Get,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExamplePayloadDto } from '../../dto/example.payload.dto';
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
  async getListExample(@Query() query: ExamplePayloadDto): Promise<any> {
    const pagination: PaginationOptionsInterface =
      createPaginationOptions(query);
    const order = transformOrderParameter(query.order);
    const firstName = transformFilterParameter(query.firstName);
    const stringFilter = generateStringFilter(query.firstName, 'a.first_name');
    const stringOrder = generateStringOrder(query.order, 'a');
    console.log(stringOrder);
    console.log(stringFilter);
    return { ...pagination, ...order, ...firstName };
  }
}
