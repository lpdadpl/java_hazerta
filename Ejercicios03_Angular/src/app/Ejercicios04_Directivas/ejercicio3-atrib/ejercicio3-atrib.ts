import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3-atrib',
  imports: [CommonModule],
  templateUrl: './ejercicio3-atrib.html',
  styleUrl: './ejercicio3-atrib.css',
})
export class Ejercicio3Atrib {


  estaAutenticado: boolean = true;

}
