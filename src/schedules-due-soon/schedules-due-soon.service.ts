import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedulesDueSoonService {

    private schedulesDueSoon = [
        {
            "id": 1,
            "name": "Ama Ghana",
            "image": "/src/assets/img3.jpg",
            "section": "Frontdesk",
            "end_date": "October 8, 2024"
          },
          {
            "id": 2,
            "name": "Jane Doe",
            "image": "/src/assets/img2.jpg",
            "section": "IT Office",
            "end_date": "October 15, 2024"
          },
          {
            "id": 3,
            "name": "Isaac Eshun",
            "image": "https://res.cloudinary.com/dvvg2hcv5/image/upload/v1734071724/fc2nukimei1rug3tacsq.jpg",
            "section": "Billing Room",
            "end_date": "October 10, 2024"
          },
          {
            "id": 4,
            "name": "Ama Ghana",
            "image": "/src/assets/img3.jpg",
            "section": "Frontdesk",
            "end_date": "October 8, 2024"
          },
          {
            "id": 5,
            "name": "Jane Doe",
            "image": "/src/assets/img2.jpg",
            "section": "IT Office",
            "end_date": "October 15, 2024"
          },
          {
            "id": 6,
            "name": "Isaac Eshun",
            "image": "/src/assets/img1.jpg",
            "section": "Billing Room",
            "end_date": "October 10, 2024"
          }

        ]

    getDueSchedules(){
        return this.schedulesDueSoon;
    }
}
