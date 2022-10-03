import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
import { ExampleCreatePayloadDto } from '../../dto/example/example.create.payload.dto';
import { ExampleCreateResponseDto } from '../../dto/example/example.create.response.dto';
import { DefaultResponseDto } from '../../dto/default.response.dto';
import { ExampleUpdatePayloadDto } from '../../dto/example/example.update.payload.dto';
import { ExampleUpdateResponseDto } from '../../dto/example/example.update.response.dto';
import { ExampleFindPayloadDto } from '../../dto/example/example.find.payload.dto';
import { ExampleFindResponseDto } from '../../dto/example/example.find.response.dto';

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
    @Param() param: ExampleFindPayloadDto,
  ): Promise<ExampleFindResponseDto> {
    return this.exampleService.findExampleById(param.id);
  }

  @Post('')
  async createExample(
    @Body() body: ExampleCreatePayloadDto,
  ): Promise<ExampleCreateResponseDto> {
    return this.exampleService.createExample(body);
  }

  @Put(':id')
  async updateExample(
    @Param('id') id: string,
    @Body() body: ExampleUpdatePayloadDto,
  ): Promise<ExampleUpdateResponseDto> {
    return this.exampleService.updateExampe(body, id);
  }

  @Delete(':id')
  async deleteExample(@Param('id') id: string): Promise<DefaultResponseDto> {
    return this.exampleService.deleteExampleById(id);
  }
}
