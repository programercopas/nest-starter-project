import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { toNumber, trim } from '../helpers/helper';
import { ApiProperty } from '@nestjs/swagger';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class PaginationPayloadDto {
  @ApiProperty()
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsDefined()
  page: number;

  @ApiProperty()
  @Transform(({ value }) => toNumber(value, { default: 10, min: 0 }))
  @IsNumber()
  @IsDefined()
  limit: number;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsDefined()
  @IsNotEmpty()
  order: string;

  // @ApiModelPropertyOptional()
  // @Transform(({ value }) => trim(value))
  // @IsOptional()
  // search: string;
}
