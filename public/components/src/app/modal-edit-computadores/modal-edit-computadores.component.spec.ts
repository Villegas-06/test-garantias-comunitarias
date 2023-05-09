import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEditComputadoresComponent } from './modal-edit-computadores.component';

describe('ModalEditComputadoresComponent', () => {
  let component: ModalEditComputadoresComponent;
  let fixture: ComponentFixture<ModalEditComputadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditComputadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditComputadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
