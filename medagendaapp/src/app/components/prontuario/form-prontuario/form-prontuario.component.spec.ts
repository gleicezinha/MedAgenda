import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProntuarioComponent } from './form-prontuario.component';

describe('FormProntuarioComponent', () => {
  let component: FormProntuarioComponent;
  let fixture: ComponentFixture<FormProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProntuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
