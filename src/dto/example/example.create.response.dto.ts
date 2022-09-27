import { DefaultResponseDto } from '../default.response.dto';
import { IsString } from 'class-validator';

export class ExampleCreateResponseDto extends DefaultResponseDto {
  @IsString()
  exampleId: string;
}
