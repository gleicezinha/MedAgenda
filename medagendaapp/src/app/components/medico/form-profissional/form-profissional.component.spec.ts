import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfissionalComponent } from './form-profissional.component';

describe('FormProfissionalComponent', () => {
  let component: FormProfissionalComponent;
  let fixture: ComponentFixture<FormProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProfissionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
