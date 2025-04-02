import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioComponent } from './prontuario.component';

describe('ProntuarioComponent', () => {
  let component: ProntuarioComponent;
  let fixture: ComponentFixture<ProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProntuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
