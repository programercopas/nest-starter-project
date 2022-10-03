import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';

export class ExampleParamPayloadDto {
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  id: string;
}
