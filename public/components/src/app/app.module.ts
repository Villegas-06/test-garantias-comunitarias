import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroComputadoresComponent } from './registro-computadores/registro-computadores.component';
import { ModalEditComputadoresComponent } from './modal-edit-computadores/modal-edit-computadores.component';
import { ModalDeleteComputadoresComponent } from './modal-delete-computadores/modal-delete-computadores.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComputadoresComponent,
    ModalEditComputadoresComponent,
    ModalDeleteComputadoresComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
