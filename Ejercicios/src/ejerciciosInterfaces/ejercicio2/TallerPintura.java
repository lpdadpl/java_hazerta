package ejerciciosInterfaces.ejercicio2;

public class TallerPintura implements iTaller{
    @Override
    public String reparar(Coche coche) {
        return "Reparacion Pintura";

    }
}
