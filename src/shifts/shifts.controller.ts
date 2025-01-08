import { Controller, Delete, Get, Patch, Post, Param, Body, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { CreateShiftDto } from 'src/dto/create-shift.dto';
import { UpdateShiftDto } from 'src/dto/update-shift.dto';

@Controller('shifts')
export class ShiftsController {

    constructor(private readonly shiftsService: ShiftsService){}
    @Get()
    getAllShifts(){
        return this.shiftsService.getAllShifts();
    }

    @Post()
    createShift(@Body(ValidationPipe) createShiftDto: CreateShiftDto){
        return this.shiftsService.createShift(createShiftDto);
    }

    @Patch(':id')
    updateShift(@Param('id', ParseIntPipe) id: number, @Body() updateShiftDto: UpdateShiftDto){
        return this.shiftsService.updateShift(id, updateShiftDto);
    }

    @Delete()
    deleteShift(){
        return "Deletes Shift"
    }

}
