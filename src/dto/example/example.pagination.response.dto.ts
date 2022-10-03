import { PaginationResponseDto } from '../pagination.response.dto';
import { IsDate, IsDefined, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { trim } from '../../helpers/helper';

export class ExamplePaginationResponseDto extends PaginationResponseDto {
  data: ExamplePaginationDataDto[];
}

export class ExamplePaginationDataDto {
  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsString()
  @IsDefined()
  exampleId: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsString()
  firstName: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsString()
  lastName: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsString()
  email: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsString()
  phone: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsString()
  address: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsDate()
  createdDate: Date;
}
