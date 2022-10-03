import { PaginationPayloadDto } from '../pagination.payload.dto';
import { IsDefined, IsString } from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ExamplePaginationPayloadDto extends PaginationPayloadDto {
  @ApiModelPropertyOptional()
  @IsString()
  email: string;
}
