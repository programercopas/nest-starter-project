import { PaginationResponseDto } from '../pagination.response.dto';
import { IsDate, IsDefined, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { trim } from '../../helpers/helper';

export class ExamplePaginationResponseDto extends PaginationResponseDto {
  data: ExamplePaginationDataDto[];
}

export class ExamplePaginationDataDto {
  @ApiProperty({ example: '8d0c22b6-6016-4c4b-a6e4-e97da9238924' })
  @Transform(({ value }) => trim(value))
  @IsString()
  @IsDefined()
  exampleId: string;

  @ApiProperty({ example: 'Indra' })
  @Transform(({ value }) => trim(value))
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Hasan' })
  @Transform(({ value }) => trim(value))
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'indra.hasan.test@gmail.com' })
  @Transform(({ value }) => trim(value))
  @IsString()
  email: string;

  @ApiProperty({ example: '+6287788922' })
  @Transform(({ value }) => trim(value))
  @IsString()
  phone: string;

  @ApiProperty({ example: 'Bandung, Indonesia' })
  @Transform(({ value }) => trim(value))
  @IsString()
  address: string;

  @ApiProperty({ example: '2022-09-30 23:59:59' })
  @Transform(({ value }) => trim(value))
  @IsDate()
  createdDate: Date;
}
