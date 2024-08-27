import { TestBed } from '@angular/core/testing';

import { ToggleWidthService } from './toggle-width.service';

describe('ToggleWidthService', () => {
  let service: ToggleWidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleWidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
