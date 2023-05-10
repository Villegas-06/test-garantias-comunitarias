import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/DataService';

@Component({
  selector: 'app-modal-edit-computadores',
  templateUrl: './modal-edit-computadores.component.html',
  styleUrls: ['./modal-edit-computadores.component.css'],
})
export class ModalEditComputadoresComponent implements OnInit {
  @Input() itemId: string;

  data: any[];

  gce_nombre_equipo: string;
  gce_board: string;
  gce_case: string;
  gce_procesador: string;
  gce_teclado: string;
  gce_mouse: string;
  gce_pantalla: string;
  gce_estado: string;

  constructor(
    private http: HttpClient,
    private elRef: ElementRef,
    private dataService: DataService
  ) {}

  loadData() {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editForm() {
    const formData = new FormData();

    const gce_id = this.elRef.nativeElement.querySelector('.editForm').id;
    console.log(gce_id);

    formData.append('gce_nombre_equipo', this.gce_nombre_equipo);
    formData.append('gce_board', this.gce_board);
    formData.append('gce_case', this.gce_case);
    formData.append('gce_procesador', this.gce_procesador);
    formData.append('gce_teclado', this.gce_teclado);
    formData.append('gce_mouse', this.gce_mouse);
    formData.append('gce_pantalla', this.gce_pantalla);
    formData.append('gce_estado', this.gce_estado);

    this.http
      .post(`http://localhost:8000/api/editPc/${gce_id}`, formData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

      alert("Registro Actualizado");

      setTimeout(() =>{
        location.reload();
      }, 1000)

  }

  ngOnInit(): void {}
}
