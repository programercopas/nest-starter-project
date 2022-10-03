import { Transform } from 'class-transformer';
import { trim } from '../../helpers/helper';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ExampleUpdatePayloadDto {
  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  firstName: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  lastName: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  email: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  phone: string;

  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  address: string;
}
