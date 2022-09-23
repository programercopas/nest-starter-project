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

@Controller('example')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Get('list')
  async getListExample(@Query() query: ExamplePayloadDto): Promise<any> {
    console.log({ query });
    return query;
  }
}
