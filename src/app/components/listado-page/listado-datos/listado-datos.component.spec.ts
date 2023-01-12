import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDatosComponent } from './listado-datos.component';

describe('ListadoDatosComponent', () => {
  let component: ListadoDatosComponent;
  let fixture: ComponentFixture<ListadoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
