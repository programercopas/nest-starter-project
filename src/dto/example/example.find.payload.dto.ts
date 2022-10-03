import { IsDefined, IsNotEmpty, IsUUID } from 'class-validator';

export class ExampleFindPayloadDto {
  @IsNotEmpty()
  @IsDefined()
  @IsUUID()
  id: string;
}
