import { DefaultResponseDto } from '../default.response.dto';
import {ExampleDefaultDataDto} from "./example.default.data.dto";

export class ExampleCreateResponseDto extends DefaultResponseDto {
  data: ExampleDefaultDataDto;
}
