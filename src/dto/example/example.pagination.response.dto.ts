import { PaginationResponseDto } from '../pagination.response.dto';
import { IsDate, IsDefined, IsString } from 'class-validator';

export class ExamplePaginationResponseDto extends PaginationResponseDto {
  data: ExamplePaginationDataDto[];
}

export class ExamplePaginationDataDto {
  @IsString()
  @IsDefined()
  exampleId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  address: string;

  @IsDate()
  createdDate: Date;
}
