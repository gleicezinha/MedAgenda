import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendenteFormComponent } from './atendente-form.component';

describe('AtendenteFormComponent', () => {
  let component: AtendenteFormComponent;
  let fixture: ComponentFixture<AtendenteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtendenteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
