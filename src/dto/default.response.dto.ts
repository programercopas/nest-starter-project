import { IsString } from 'class-validator';

export class DefaultResponseDto {
  @IsString()
  message: string;
}
