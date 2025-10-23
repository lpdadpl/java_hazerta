package ejercicios_clases_abstractas_interfaces.ejercicio1.implementacion;

import ejercicios_clases_abstractas_interfaces.ejercicio1.modelo.Animal;

public class Perro extends Animal {

    @Override
    public void comer() {

    }

    @Override
    public String moverse() {
        return "patitas";
    }
}
