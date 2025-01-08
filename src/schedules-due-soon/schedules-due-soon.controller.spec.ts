import { Test, TestingModule } from '@nestjs/testing';
import { SchedulesDueSoonController } from './schedules-due-soon.controller';

describe('SchedulesDueSoonController', () => {
  let controller: SchedulesDueSoonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchedulesDueSoonController],
    }).compile();

    controller = module.get<SchedulesDueSoonController>(SchedulesDueSoonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
