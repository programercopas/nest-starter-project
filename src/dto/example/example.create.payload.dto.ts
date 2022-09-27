import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { trim } from '../../helpers/helper';

export class ExampleCreatePayloadDto {
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  firstName: string;

  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  lastName: string;

  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  email: string;

  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  phone: string;

  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  address: string;
}
