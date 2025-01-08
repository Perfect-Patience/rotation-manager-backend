import { PartialType } from "@nestjs/mapped-types";
import { CreateDaysDto } from "./create-day.dto";


export class UpdateDayDto extends PartialType(CreateDaysDto){}