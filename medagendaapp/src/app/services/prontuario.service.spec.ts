import { TestBed } from '@angular/core/testing';

import { ProntuarioService } from './prontuario.service';

describe('ProntuarioService', () => {
  let service: ProntuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProntuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
