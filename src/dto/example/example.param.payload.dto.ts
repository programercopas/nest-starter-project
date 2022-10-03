import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { trim } from '../../helpers/helper';

export class ExampleParamPayloadDto {
  @ApiProperty()
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  id: string;
}
