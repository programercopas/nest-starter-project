import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { trim } from '../../helpers/helper';

export class ExampleParamPayloadDto {
  @ApiProperty({ example: '8d0c22b6-6016-4c4b-a6e4-e97da9238924' })
  @Transform(({ value }) => trim(value))
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  id: string;
}
