import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DataService } from '../service/DataService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-delete-computadores',
  templateUrl: './modal-delete-computadores.component.html',
  styleUrls: ['./modal-delete-computadores.component.css'],
})
export class ModalDeleteComputadoresComponent implements OnInit {
  @Input() itemId: string;

  data: any[];

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

  deleteForm() {
    const gce_id = this.elRef.nativeElement.querySelector('.formDelete').id;

    this.http.delete(`http://localhost:8000/api/deletPc/${gce_id}`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

    alert("Registro Eliminado");

    setTimeout(() =>{
      location.reload();
    }, 1000)


  }

  ngOnInit(): void {}
}
