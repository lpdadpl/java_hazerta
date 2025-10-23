package ejercicios_clases_abstractas_interfaces.ejercicio4.implementacion;

import ejercicios_clases_abstractas_interfaces.ejercicio4.interfaz.iTaller;

public class TallerPintura implements iTaller {
    @Override
    public String repararCoche() {
        return "Coche pintado";
    }
}
