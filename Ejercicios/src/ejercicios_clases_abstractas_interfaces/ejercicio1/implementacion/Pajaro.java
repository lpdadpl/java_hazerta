package ejercicios_clases_abstractas_interfaces.ejercicio1.implementacion;

import ejercicios_clases_abstractas_interfaces.ejercicio1.modelo.Animal;

public class Pajaro extends Animal {
    @Override
    public void comer() {
        System.out.println("comidita de pajaro");
        return;
    }

    @Override
    public String moverse() {
        return "pisaditas de pajaro";
    }
}
