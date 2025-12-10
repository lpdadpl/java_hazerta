import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2-ts',
  imports: [CommonModule],
  templateUrl: './ejercicio2-ts.html',
  styleUrl: './ejercicio2-ts.css',
})
export class Ejercicio2Ts {

  texto: string = 'Hola, TypeScript!';
  numero?: number
  mensajeError?: string


  updateDatos(nuevoTexto: string, nuevoNumero: string): void {
    this.mensajeError = "Error Garrafal"
    this.texto = nuevoTexto;
    const n = Number(nuevoNumero);
    if (isNaN(n)) {
      this.mensajeError = 'Número inválido';
    } else {
      this.numero = n;
      this.mensajeError= "Todo fino";
    }
    console.log(this.numero);
    console.log(this.texto);
    console.log('Datos actualizados:', this.texto, this.numero);
    console.log(this.mensajeError);

  }


}
