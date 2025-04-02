import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEspecialidadeComponent } from './form-especialidade.component';

describe('FormEspecialidadeComponent', () => {
  let component: FormEspecialidadeComponent;
  let fixture: ComponentFixture<FormEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEspecialidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
