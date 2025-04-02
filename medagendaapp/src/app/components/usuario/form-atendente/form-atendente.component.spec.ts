import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAtendenteComponent } from './form-atendente.component';

describe('FormAtendenteComponent', () => {
  let component: FormAtendenteComponent;
  let fixture: ComponentFixture<FormAtendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAtendenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAtendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
