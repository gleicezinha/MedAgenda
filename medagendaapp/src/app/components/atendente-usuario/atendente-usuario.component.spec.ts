import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendenteUsuarioComponent } from './atendente-usuario.component';

describe('AtendenteUsuarioComponent', () => {
  let component: AtendenteUsuarioComponent;
  let fixture: ComponentFixture<AtendenteUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtendenteUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendenteUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
