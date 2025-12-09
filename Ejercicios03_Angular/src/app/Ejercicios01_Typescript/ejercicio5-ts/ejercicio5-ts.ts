import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Necesario para 'if' en HTML si lo usas

@Component({
  selector: 'app-ejercicio5-ts',
  // Es mejor usar 'standalone: true' en componentes modernos,
  // pero mantengo tu estructura de imports: [...]
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ejercicio5-ts.html',
  styleUrl: './ejercicio5-ts.css',
})
export class Ejercicio5Ts implements OnInit {

  // Definimos el FormGroup
  Formulario!: FormGroup;

  // Variables para mostrar el resultado en la plantilla
  estado!: string;
  mensaje!: string;

  // Lista de estados para la lógica de mensajes
  private readonly estadosMensaje = {
    'Recibido': 'El pedido ha sido recibido',
    'En transito': 'El pedido está en tránsito',
    'Entregado': 'El pedido ha sido entregado'
  };

  ngOnInit() {
    // Inicialización del FormGroup al iniciar el componente
    this.Formulario = new FormGroup({
      // Inicializamos el FormControl 'estado' con un valor por defecto nulo
      estado: new FormControl(null)
    });
  }

  // Método que se ejecuta al enviar el formulario (ngSubmit)
  onSubmit() {
    // Capturamos el valor del control 'estado'
    const nuevoEstado = this.Formulario.get('estado')!.value;

    // 1. Asignamos el valor capturado a la propiedad 'estado' para mostrarlo
    this.estado = nuevoEstado;

    // 2. Generamos el mensaje basado en el estado
    this.generarMensaje(nuevoEstado);
  }

  // Lógica de traducción de estado a mensaje (corregida)
  generarMensaje(estado: string | null) {
    if (estado && this.estadosMensaje[estado as keyof typeof this.estadosMensaje]) {
      this.mensaje = this.estadosMensaje[estado as keyof typeof this.estadosMensaje];
    } else {
      this.mensaje = "Estado desconocido o no seleccionado";
    }
  }

}
