import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4-ts',
  imports: [],
  templateUrl: './ejercicio4-ts.html',
  styleUrl: './ejercicio4-ts.css',
})
export class Ejercicio4Ts {

  mensaje!: string

  checkEdad(edad: any): void {
    const edadNum = Number(edad);
    if (edadNum >= 18) {
      console.log(`Edad: ${edadNum} - ¡Eres mayor de edad!`);
      this.mensaje = "¡Eres mayor de edad!";
    } else {
      console.log(`Edad: ${edadNum} - Eres menor de edad`);
      this.mensaje = "Eres menor de edad";
    }
  }
}
