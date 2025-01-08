import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from 'src/dto/create-shift.dto';
import { UpdateShiftDto } from 'src/dto/update-shift.dto';

@Injectable()
export class ShiftsService {


    private shifts = [
        {
          "id": 1,
          "name": "Morning Shift",
          "start_time": "08:00 AM",
          "end_time": "02:00 PM"
        },
        {
          "id": 2,
          "name": "Afternoon Shift",
          "start_time": "2:00 PM",
          "end_time": "08:00 PM"
        },
        {
          "id": 3,
          "name": "Evening Shift",
          "start_time": "08:00 PM",
          "end_time": "07:00 AM"
        }
    ]

    getAllShifts(){
        return this.shifts;
    }
    createShift(shift: CreateShiftDto){
        const highestId = [...this.shifts].sort((a,b) => b.id - a.id);
        const newShift = {id: highestId[0].id + 1,
            ...shift}
            this.shifts.push(newShift);
        }

    updateShift(id:number, updatedshift: UpdateShiftDto){
        this.shifts = this.shifts.map(shift => {
            if (shift.id === id){
                return {...shift, ...updatedshift}
            }
            return shift;
        })
        return "Shift updated";
    }

    deleteShift(id: number){
        this.shifts = this.shifts.filter(shift => shift.id!== id);
        return "Shift deleted";
    }
}
