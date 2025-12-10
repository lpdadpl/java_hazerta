import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1-ts',
  imports: [],
  templateUrl: './ejercicio1-ts.html',
  styleUrl: './ejercicio1-ts.css',
})
export class Ejercicio1Ts {

  texto!: string
  numero!: number
  booleano!: boolean
  nulo!: null
  indefinido!: undefined


  imprimirValores(): void {
    this.texto = 'Hola, este es el primer ejercicio de TypeScript en Angular';
    this.numero = 67;
    this.booleano = true;
    this.nulo = null;
    this.indefinido = undefined;

    console.log('Texto:', this.texto);
    console.log('Número:', this.numero);
    console.log('Booleano:', this.booleano);
    console.log('Nulo:', this.nulo);
    console.log('Indefinido:', this.indefinido);
  }

}
