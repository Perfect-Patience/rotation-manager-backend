import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from 'src/dto/create-section.dto';
import { UpdateSectionDto } from 'src/dto/update-section.dto';

@Injectable()
export class SectionsService {

    private SectionsSummary = [
        {
            "id": "66b4",
            "name": "Billing Room",
            "status": "Active",
            "employees_at_post": "4",
            "upcoming_schedule": "Yes"
          },
          {
            "id": "2e60",
            "name": "Frontdesk",
            "status": "Active",
            "employees_at_post": "2",
            "upcoming_schedule": "Yes"
          },
          {
            "id": "47c2",
            "name": "IT Office",
            "status": "Active",
            "employees_at_post": "3",
            "upcoming_schedule": "No"
          },
          {
            "id": "66b5",
            "name": "Billing Room",
            "status": "Inactive",
            "employees_at_post": "0",
            "upcoming_schedule": "No"
          },
          {
            "id": "2e61",
            "name": "Frontdesk",
            "status": "Inactive",
            "employees_at_post": "0",
            "upcoming_schedule": "No"
          },
          {
            "id": "47c3",
            "name": "IT Office",
            "status": "Inactive",
            "employees_at_post": "0",
            "upcoming_schedule": "No"
          }
    ]

    getSectionsSummary(){
        return this.SectionsSummary;
    }

    getSectionById(id: String){
        return this.SectionsSummary.find(section => section.id === id);
    }

    createSection(createSectionDto: CreateSectionDto){
        return "Add logic"
    }

    updateSection(id: string, updateSectionDto: UpdateSectionDto){
        return "Add update logic";
    }

    deleteSection(id:string){
        return "Add delete logic";
    }

}
