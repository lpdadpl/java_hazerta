import { NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2-atrib',
  imports: [NgClass, UpperCasePipe],
  templateUrl: './ejercicio2-atrib.html',
  styleUrl: './ejercicio2-atrib.css',
})
export class Ejercicio2Atrib {
status: 'activo' | 'inactivo' = 'activo';

  /**
   * Método para alternar el valor de la propiedad 'status'
   */
  toggleStatus(): void {
    if (this.status === 'activo') {
      this.status = 'inactivo';
    } else {
      this.status = 'activo';
    }
  }
}
