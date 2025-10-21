package javaTime.ejercicio1;

import java.time.LocalDate;

public class UsarFecha {
    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        LocalDate date2 = LocalDate.now().plusDays(10);

        System.out.println("hoy es: "+date);
        System.out.println("dentro de diez dias sera: "+date2);
    }
}
