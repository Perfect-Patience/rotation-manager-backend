import { Module } from '@nestjs/common';
import { SchedulesDueSoonController } from './schedules-due-soon.controller';
import { SchedulesDueSoonService } from './schedules-due-soon.service';

@Module({
  controllers: [SchedulesDueSoonController],
  providers: [SchedulesDueSoonService]
})
export class SchedulesDueSoonModule {}
