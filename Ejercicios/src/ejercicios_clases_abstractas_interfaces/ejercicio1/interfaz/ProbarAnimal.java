package ejercicios_clases_abstractas_interfaces.ejercicio1.interfaz;

import ejercicios_clases_abstractas_interfaces.ejercicio1.implementacion.Pajaro;

public class ProbarAnimal {
    public static void main(String[] args) {
        Pajaro piopio = new Pajaro();

        System.out.println(piopio.moverse());
        piopio.comer();

    }
}
