import { ExamplePaginationDataDto } from './example.pagination.response.dto';
import { IsString } from 'class-validator';

export class ExampleFindResponseDto extends ExamplePaginationDataDto {
  @IsString()
  message: string;
}
