package ejerciciosInterfaces.ejercicio1;

import java.util.concurrent.locks.Condition;

public class Main {
    public static void main(String[] args) {
        Coche c1 = new Coche( "Seat", 100);
        Conductor con1 = new Conductor( "Paco", c1);

        c1.moverse();
        con1.moverse();

    }
}
