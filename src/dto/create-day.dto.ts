import { IsNotEmpty, IsString } from "class-validator";

export class CreateDaysDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    start_day: string;

    @IsNotEmpty()
    @IsString()
    end_day: string;
}