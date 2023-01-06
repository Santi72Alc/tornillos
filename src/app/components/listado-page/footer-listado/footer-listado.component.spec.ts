import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterListadoComponent } from './footer-listado.component';

describe('FooterListadoComponent', () => {
  let component: FooterListadoComponent;
  let fixture: ComponentFixture<FooterListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
