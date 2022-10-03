import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { trim } from '../../helpers/helper';

export class ExampleDefaultDataDto {
  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsNumber()
  exampleId: string;
}
