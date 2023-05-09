import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteComputadoresComponent } from './modal-delete-computadores.component';

describe('ModalDeleteComputadoresComponent', () => {
  let component: ModalDeleteComputadoresComponent;
  let fixture: ComponentFixture<ModalDeleteComputadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteComputadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteComputadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
