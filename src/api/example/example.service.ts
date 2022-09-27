import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { ExamplePaginationPayloadDto } from '../../dto/example/example.pagination.payload.dto';
import { PaginationOptionsInterface } from '../../interfaces/pagination.options.interface';
import {
  createPaginationOptions,
  createResponsePagination,
} from '../../helpers/pagination.helper';
import { ExampleDbService } from '../../services/db/example.db.service';
import {
  ExamplePaginationResponseDto,
} from '../../dto/example/example.pagination.response.dto';
import { ExampleCreatePayloadDto } from '../../dto/example/example.create.payload.dto';
import { ExampleCreateResponseDto } from '../../dto/example/example.create.response.dto';
import { DefaultResponseDto } from '../../dto/default.response.dto';
import { EXAMPLERESPONSE } from '../../constants/response/example.response.constant';
import { ExampleFindResponseDto } from '../../dto/example/example.find.response.dto';
import { ExampleUpdateResponseDto } from '../../dto/example/example.update.response.dto';
import { ExampleUpdatePayloadDto } from '../../dto/example/example.update.payload.dto';
import {VALIDATE} from "../../constants/response/validate.response.constant";

@Injectable()
export class ExampleService {
  constructor(private exampleDbService: ExampleDbService) {}

  async getListExample(
    params: ExamplePaginationPayloadDto,
  ): Promise<ExamplePaginationResponseDto> {
    try {
      const pagination: PaginationOptionsInterface =
        createPaginationOptions(params);
      const { res, total } = await this.exampleDbService.listPagination(
        pagination,
        params,
      );
      return createResponsePagination(
        pagination,
        new ExamplePaginationResponseDto(),
        total,
        res,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteExampleById(exampleId: string): Promise<DefaultResponseDto> {
    try {
      const findById = await this.exampleDbService.findById(exampleId);
      if (!findById) {
        throw new BadRequestException(VALIDATE.NOTFOUND);
      }
      await this.exampleDbService.deleteById(exampleId);
      const result = new DefaultResponseDto();
      result.message = EXAMPLERESPONSE.DELETE;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findExampleById(exampleId: string): Promise<ExampleFindResponseDto> {
    try {
      const findById = await this.exampleDbService.findById(exampleId);
      if (!findById) {
        throw new BadRequestException(VALIDATE.NOTFOUND);
      }
      const result = new ExampleFindResponseDto();
      result.exampleId = findById.exampleId;
      result.email = findById.email;
      result.firstName = findById.firstName;
      result.lastName = findById.lastName;
      result.phone = findById.phone;
      result.address = findById.address;
      result.message = EXAMPLERESPONSE.FINDONE;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async createExample(
    body: ExampleCreatePayloadDto,
  ): Promise<ExampleCreateResponseDto> {
    try {
      const checkEmail = await this.exampleDbService.findByEmail(body.email);
      if (checkEmail) {
        throw new BadRequestException(VALIDATE.EMAILUSED);
      }

      const create = await this.exampleDbService.createExample(body);
      const response = new ExampleCreateResponseDto();
      response.message = EXAMPLERESPONSE.CREATE;
      response.exampleId = create.identifiers[0].exampleId;
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateExampe(
    body: ExampleUpdatePayloadDto,
    exampleId: string,
  ): Promise<ExampleUpdateResponseDto> {
    try {
      const findById = await this.exampleDbService.findById(exampleId);
      if (!findById) {
        throw new BadRequestException(VALIDATE.NOTFOUND);
      }

      const validateEmailIsUsed =
        await this.exampleDbService.validateEmailIsUsed(body.email, exampleId);
      if (!validateEmailIsUsed) {
        throw new BadRequestException(VALIDATE.EMAILUSED);
      }

      await this.exampleDbService.updateExample(body, exampleId);
      const result = new ExampleUpdateResponseDto();
      result.exampleId = exampleId;
      result.message = EXAMPLERESPONSE.UPDATE;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
