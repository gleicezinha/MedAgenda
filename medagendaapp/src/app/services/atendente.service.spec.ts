import { TestBed } from '@angular/core/testing';

import { AtendenteService } from './atendente.service';

describe('AtendenteService', () => {
  let service: AtendenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtendenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
