import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalFormComponent } from './profissional-form.component';

describe('ProfissionalFormComponent', () => {
  let component: ProfissionalFormComponent;
  let fixture: ComponentFixture<ProfissionalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfissionalFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
