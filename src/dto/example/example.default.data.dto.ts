import {IsNumber} from "class-validator";

export class ExampleDefaultDataDto {
    @IsNumber()
    exampleId : string;
}