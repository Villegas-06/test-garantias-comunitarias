import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/DataService';
import { ApiService } from '../service/ApiSerive';

@Component({
  selector: 'app-registro-computadores',
  templateUrl: './registro-computadores.component.html',
  styleUrls: ['./registro-computadores.component.css'],
})
export class RegistroComputadoresComponent implements OnInit {
  data: any[];
  newItem: any = {};

  gce_nombre_equipo: string;
  gce_board: string;
  gce_case: string;
  gce_procesador: string;
  gce_grafica: string;
  gce_ram: string;
  gce_disco_duro: string;
  gce_teclado: string;
  gce_mouse: string;
  gce_pantalla: string;
  gce_estado: string;

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private apiService: ApiService
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

  submitForm() {
    const formData = new FormData();
    formData.append('gce_nombre_equipo', this.gce_nombre_equipo);
    formData.append('gce_board', this.gce_board);
    formData.append('gce_case', this.gce_case);
    formData.append('gce_procesador', this.gce_procesador);
    formData.append('gce_grafica', this.gce_grafica);
    formData.append('gce_ram', this.gce_ram);
    formData.append('gce_disco_duro', this.gce_disco_duro);
    formData.append('gce_teclado', this.gce_teclado);
    formData.append('gce_mouse', this.gce_mouse);
    formData.append('gce_pantalla', this.gce_pantalla);
    formData.append('gce_estado', this.gce_estado);

    this.http.post('http://localhost:8000/api/sendPc', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    );

    this.loadData();

  }

  ngOnInit(): void {
    this.apiService.getData().subscribe((response) => {
      this.data = response;
    });
  }
}
