import { TestBed } from '@angular/core/testing';

import { CardsTsService } from './cards.ts.service';

describe('CardsTsService', () => {
  let service: CardsTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
