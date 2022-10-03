import { PaginationPayloadDto } from '../pagination.payload.dto';
import { IsString } from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ExamplePaginationPayloadDto extends PaginationPayloadDto {
  @ApiModelPropertyOptional({ example: 'indra.hasan.test@gmail.com' })
  @IsString()
  email: string;
}
