package ejercicios_clases_abstractas_interfaces.ejercicio4;

import ejercicios_clases_abstractas_interfaces.ejercicio4.implementacion.TallerMecanica;
import ejercicios_clases_abstractas_interfaces.ejercicio4.implementacion.TallerPintura;
import ejercicios_clases_abstractas_interfaces.ejercicio4.interfaz.iTaller;
import ejercicios_clases_abstractas_interfaces.ejercicio4.modelo.Coche;
import ejercicios_clases_abstractas_interfaces.ejercicio4.modelo.SeguroCoche;

public class ProbarArreglo {
    public static void main(String[] args) {
        Coche coche = new Coche();
        SeguroCoche sc= new SeguroCoche();
        TallerPintura tp = new TallerPintura();
        TallerMecanica tm = new TallerMecanica();
        iTaller tp2 = new TallerPintura();
        iTaller tm2 = new TallerMecanica();

        tp.repararCoche();
        tp2.repararCoche();
        tm.repararCoche();
        tm2.repararCoche();


        System.out.println("hola");
    }
}
