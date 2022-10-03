import { ExamplePaginationDataDto } from './example.pagination.response.dto';
import { DefaultResponseDto } from '../default.response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ExampleFindResponseDto extends DefaultResponseDto {
  @ApiProperty()
  data: ExamplePaginationDataDto;
}
