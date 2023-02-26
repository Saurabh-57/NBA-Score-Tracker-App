import { TestBed } from '@angular/core/testing';

import { CustomScoreService } from './customscore.service';

describe('CustomScoreService', () => {
  let service: CustomScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
