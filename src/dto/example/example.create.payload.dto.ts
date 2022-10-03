import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { trim } from '../../helpers/helper';
import { ApiProperty } from '@nestjs/swagger';

export class ExampleCreatePayloadDto {
  @ApiProperty({ example: 'Indra' })
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  firstName: string;

  @ApiProperty({ example: 'Hasan' })
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  lastName: string;

  @ApiProperty({ example: 'indra.hasan.test@gmail.com' })
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  email: string;

  @ApiProperty({ example: '+6287789288' })
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  phone: string;

  @ApiProperty({
    example: 'Bandung, Indonesia',
  })
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  address: string;
}
