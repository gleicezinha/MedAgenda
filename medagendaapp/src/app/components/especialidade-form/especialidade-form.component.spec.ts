import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeFormComponent } from './especialidade-form.component';

describe('EspecialidadeFormComponent', () => {
  let component: EspecialidadeFormComponent;
  let fixture: ComponentFixture<EspecialidadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialidadeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
