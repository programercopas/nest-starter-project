import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { toNumber, trim } from '../helpers/helper';

export class PaginationPayloadDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsDefined()
  page: number;

  @Transform(({ value }) => toNumber(value, { default: 10, min: 0 }))
  @IsNumber()
  @IsDefined()
  limit: number;

  @Transform(({ value }) => trim(value))
  @IsDefined()
  @IsNotEmpty()
  order: string;

  @Transform(({ value }) => trim(value))
  @IsOptional()
  search: string;
}
