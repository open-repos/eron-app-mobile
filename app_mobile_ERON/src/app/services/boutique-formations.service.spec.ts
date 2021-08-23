import { TestBed } from '@angular/core/testing';

import { BoutiqueFormationsService } from './boutique-formations.service';

describe('BoutiqueFormationsService', () => {
  let service: BoutiqueFormationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoutiqueFormationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
