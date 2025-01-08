import { Test, TestingModule } from '@nestjs/testing';
import { SchedulesDueSoonService } from './schedules-due-soon.service';

describe('SchedulesDueSoonService', () => {
  let service: SchedulesDueSoonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchedulesDueSoonService],
    }).compile();

    service = module.get<SchedulesDueSoonService>(SchedulesDueSoonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
