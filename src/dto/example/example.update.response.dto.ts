import { DefaultResponseDto } from '../default.response.dto';
import { ExampleDefaultDataDto } from './example.default.data.dto';

export class ExampleUpdateResponseDto extends DefaultResponseDto {
  data: ExampleDefaultDataDto;
}
