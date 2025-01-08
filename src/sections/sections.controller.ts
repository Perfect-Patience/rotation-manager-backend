import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { UpdateSectionDto } from 'src/dto/update-section.dto';
import { CreateSectionDto } from 'src/dto/create-section.dto';

@Controller('sections')
export class SectionsController {
    constructor(private readonly sectionsService: SectionsService){}
    @Get()
    getSectionsSummary(){
        return this.sectionsService.getSectionsSummary();
    }


    @Get(':id')
    getSectionById(@Param('id') id: string){
        return this.sectionsService.getSectionById(id);
    }

    @Post()
    createSection(@Body() createSectionDto: CreateSectionDto){
        return this.sectionsService.createSection(createSectionDto);
    }

    @Patch()
    updateSection(
        @Param('id') id: string,
        @Body() updateSectionDto: UpdateSectionDto,
    ){
        return this.sectionsService.updateSection(id, updateSectionDto);
    }


    @Delete(':id')
    deleteSection(@Param('id') id: string){
        return this.sectionsService.deleteSection(id);
    }

}
