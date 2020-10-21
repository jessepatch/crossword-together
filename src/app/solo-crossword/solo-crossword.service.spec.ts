import { TestBed } from '@angular/core/testing';

import { SoloCrosswordService } from './solo-crossword.service';

describe('SoloCrosswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoloCrosswordService = TestBed.get(SoloCrosswordService);
    expect(service).toBeTruthy();
  });
});
