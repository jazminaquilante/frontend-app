import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecioSuscripcionComponent } from './precio-suscripcion.component';

describe('PrecioSuscripcionComponent', () => {
  let component: PrecioSuscripcionComponent;
  let fixture: ComponentFixture<PrecioSuscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecioSuscripcionComponent]
    });
    fixture = TestBed.createComponent(PrecioSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
