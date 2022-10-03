import { ExamplePaginationDataDto } from './example.pagination.response.dto';
import {DefaultResponseDto} from "../default.response.dto";

export class ExampleFindResponseDto extends DefaultResponseDto{
  data: ExamplePaginationDataDto;
}
