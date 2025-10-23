package ejercicios_clases_abstractas_interfaces.ejercicio1.implementacion;

import ejercicios_clases_abstractas_interfaces.ejercicio1.modelo.Animal;

public class Pez extends Animal {
    @Override
    public void comer() {

    }

    @Override
    public String moverse() {
        return "natacion";
    }
}
