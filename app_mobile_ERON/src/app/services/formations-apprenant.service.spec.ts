import { TestBed } from '@angular/core/testing';

import { FormationsApprenantService } from './formations-apprenant.service';

describe('FormationsApprenantService', () => {
  let service: FormationsApprenantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationsApprenantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
