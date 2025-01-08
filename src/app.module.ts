import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UserModule } from './users/users.module';
import { UserService } from './users/users.service';
import { ShiftsModule } from './shifts/shifts.module';
import { DaysModule } from './days/days.module';
import { SchedulesDueSoonModule } from './schedules-due-soon/schedules-due-soon.module';
import { PersonnelModule } from './personnel/personnel.module';
import { RolesModule } from './roles/roles.module';
import { SectionsModule } from './sections/sections.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { ImageController } from './image/image.controller';
import { MulterModule } from '@nestjs/platform-express';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [UserModule, ShiftsModule, DaysModule, SchedulesDueSoonModule, PersonnelModule, RolesModule, SectionsModule, 
    MulterModule.register({
      dest: './uploads',
    }), 
    DatabaseModule 
  ],
  controllers: [AppController, UsersController, ImageController],
  providers: [AppService, UserService, CloudinaryService],
})
export class AppModule {}
