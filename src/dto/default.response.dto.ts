import { IsNumber, IsString } from 'class-validator';

export class DefaultResponseDto {
  @IsNumber()
  statusCode: number;

  @IsString()
  message: string;
}
