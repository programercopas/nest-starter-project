import { DefaultResponseDto } from '../default.response.dto';
import { ExampleDefaultDataDto } from './example.default.data.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ExampleUpdateResponseDto extends DefaultResponseDto {
  @ApiProperty()
  data: ExampleDefaultDataDto;
}
