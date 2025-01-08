import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DaysService } from './days.service';
import { CreateDaysDto } from 'src/dto/create-day.dto';
import {UpdateDayDto} from 'src/dto/update-day.dto'
@Controller('days')
export class DaysController {

constructor (private readonly daysService: DaysService){}

  @Get()
  getAllDays() {
    return this.daysService.getAllDays();
  }

  @Post()
  createDay(@Body()  createDaysDto: CreateDaysDto) {
    return this.daysService.createDay(createDaysDto);
  }

  @Patch(':id')
  updateDay(@Param('id') id: number, @Body() updateDaydto: UpdateDayDto) {
    return this.daysService.updateDay(id, updateDaydto);
  }

  @Delete(':id')
  deleteDay(@Param('id') id: number) {
    return this.daysService.deleteDay(id);
  }
}
