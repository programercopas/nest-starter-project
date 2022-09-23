import { PaginationPayloadDto } from './pagination.payload.dto';
import { IsDefined, IsString } from 'class-validator';

export class ExamplePayloadDto extends PaginationPayloadDto {
  @IsString()
  @IsDefined()
  firstName: string;
}
