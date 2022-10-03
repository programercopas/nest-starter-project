import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
import { toNumber, trim } from '../helpers/helper';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationPayloadDto {
  @ApiProperty({ example: 1 })
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsDefined()
  page: number;

  @ApiProperty({ example: 10 })
  @Transform(({ value }) => toNumber(value, { default: 10, min: 0 }))
  @IsNumber()
  @IsDefined()
  limit: number;

  @ApiProperty({ example: 'firstName:ASC' })
  @Transform(({ value }) => trim(value))
  @IsDefined()
  @IsNotEmpty()
  order: string;

  // @ApiModelPropertyOptional()
  // @Transform(({ value }) => trim(value))
  // @IsOptional()
  // search: string;
}
