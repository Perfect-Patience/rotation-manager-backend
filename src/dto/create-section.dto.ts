import { IsNotEmpty, IsString } from "class-validator";


export class CreateSectionDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    start_time: string;

    @IsNotEmpty()
    @IsString()
    end_time: string;
}