import { Transform } from 'class-transformer';
import { toNumber } from '../helpers/helper';
import { IsDefined, IsNumber } from 'class-validator';

export class PaginationResponseDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsDefined()
  currentPage: number;

  @Transform(({ value }) => toNumber(value, { default: 1, min: 0 }))
  @IsNumber()
  @IsDefined()
  nextPage: number;

  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsNumber()
  @IsDefined()
  prevPage: number;

  @Transform(({ value }) => toNumber(value, { default: 10, min: 0 }))
  @IsNumber()
  @IsDefined()
  limit: number;

  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsNumber()
  @IsDefined()
  totalData: number;

  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsNumber()
  @IsDefined()
  totalPage: number;
}
