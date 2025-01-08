import { Injectable } from '@nestjs/common';
import { CreateDaysDto } from 'src/dto/create-day.dto';
import { UpdateDayDto } from 'src/dto/update-day.dto'
@Injectable()
export class DaysService {

private days = [
        {
          "id": 1,
          "name": "Weekdays",
          "start_day": "Monday",
          "end_day": "Friday"
        },
        {
          "id": 2,
          "name": "Weekends",
          "start_day": "Saturday",
          "end_day": "Sunday"
        }
]

getAllDays(){
    return this.days;
}

createDay(createDayDto: CreateDaysDto){
    const highestId = [...this.days].sort((a,b) => b.id - a.id);
    const newDay = {id: highestId[0].id + 1,
        ...createDayDto
    }
    this.days.push(newDay);
}

updateDay(id: number, updateDayDto: UpdateDayDto){
    this.days = this.days.map( day => {
        if (day.id === id){
            return {...day,...updateDayDto}
        }
        return day;
    })

    return "Day updated";
}


deleteDay(id: number){
    this.days = this.days.filter(day => day.id !== id);
    return "Shift deleted";
}

}
