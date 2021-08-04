import { TestBed } from '@angular/core/testing';

import { ActualitesPresseService } from './actualites-presse.service';

describe('ActualitesPresseService', () => {
  let service: ActualitesPresseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualitesPresseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
