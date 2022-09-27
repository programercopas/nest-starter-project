import { DefaultResponseDto } from '../default.response.dto';
import { IsString } from 'class-validator';

export class ExampleUpdateResponseDto extends DefaultResponseDto {
  @IsString()
  exampleId: string;
}
