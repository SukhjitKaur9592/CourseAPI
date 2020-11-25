import { TestBed } from '@angular/core/testing';

import { TopicAdditionService } from './topic-addition.service';

describe('TopicAdditionService', () => {
  let service: TopicAdditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicAdditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
