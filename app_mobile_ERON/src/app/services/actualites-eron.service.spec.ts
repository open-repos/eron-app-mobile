import { TestBed } from '@angular/core/testing';

import { ActualitesEronService } from './actualites-eron.service';

describe('ActualitesEronService', () => {
  let service: ActualitesEronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualitesEronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
