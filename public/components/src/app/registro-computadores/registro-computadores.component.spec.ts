import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComputadoresComponent } from './registro-computadores.component';

describe('RegistroComputadoresComponent', () => {
  let component: RegistroComputadoresComponent;
  let fixture: ComponentFixture<RegistroComputadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComputadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComputadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
