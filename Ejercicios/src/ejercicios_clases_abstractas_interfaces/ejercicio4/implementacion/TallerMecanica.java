package ejercicios_clases_abstractas_interfaces.ejercicio4.implementacion;

import ejercicios_clases_abstractas_interfaces.ejercicio4.interfaz.iTaller;
import ejercicios_clases_abstractas_interfaces.ejercicio4.modelo.Coche;

public class TallerMecanica implements iTaller {

    @Override
    public String toString() {
        return "TallerMecaninca{}";
    }

    public TallerMecanica() {
    }

    @Override
    public String repararCoche() {
        return "Motor arreglado";
    }
}
