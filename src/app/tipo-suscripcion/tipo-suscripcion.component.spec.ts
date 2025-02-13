import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSuscripcionComponent } from './tipo-suscripcion.component';

describe('TipoSuscripcionComponent', () => {
  let component: TipoSuscripcionComponent;
  let fixture: ComponentFixture<TipoSuscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoSuscripcionComponent]
    });
    fixture = TestBed.createComponent(TipoSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
