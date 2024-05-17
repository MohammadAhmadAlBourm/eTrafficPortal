import { TestBed } from '@angular/core/testing';

import { TrafficEventService } from './traffic-event.service';

describe('TrafficEventService', () => {
  let service: TrafficEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
