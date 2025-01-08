import { Controller, Get } from '@nestjs/common';
import {SchedulesDueSoonService} from 'src/schedules-due-soon/schedules-due-soon.service'
@Controller('api/v1/schedules-due-soon')
export class SchedulesDueSoonController {

    constructor (private readonly schedulesDueSoonService: SchedulesDueSoonService){}
    @Get()
    getDueSchedules(){
        return this.schedulesDueSoonService.getDueSchedules();
    }

}

