import { Transform } from 'class-transformer';
import { toNumber } from '../helpers/helper';
import { IsDefined, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationResponseDto {
  @ApiProperty()
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsDefined()
  currentPage: number;

  @ApiProperty()
  @Transform(({ value }) => toNumber(value, { default: 1, min: 0 }))
  @IsNumber()
  @IsDefined()
  nextPage: number;

  @ApiProperty()
  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsNumber()
  @IsDefined()
  prevPage: number;

  @ApiProperty()
  @Transform(({ value }) => toNumber(value, { default: 10, min: 0 }))
  @IsNumber()
  @IsDefined()
  limit: number;

  @ApiProperty()
  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsNumber()
  @IsDefined()
  totalData: number;

  @ApiProperty()
  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsNumber()
  @IsDefined()
  totalPage: number;
}
