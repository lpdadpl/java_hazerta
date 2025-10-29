package ejerciciosInterfacesFuncionalesYStreams.ejercicio3;

import java.sql.SQLOutput;
import java.util.function.Supplier;

/// 1. Proveedor de números aleatorios: Generar un número aleatorio en el rango
/// especificado.
/// 2. Proveedor de una lista predefinida. Devolver una lista predefinida de
/// elementos.
/// 3. Proveedor de fecha y hora actual: Obtener la fecha y hora actual del sistema.
/// 4. Proveedor de un nuevo objeto String vacío: Crear y devolver una cadena de
/// texto vacía.

public class Proveedores {


    private void randomNumber(){
        Supplier<Integer> randomNumber = () -> (int)(Math.random()*0)+1;
        System.out.println(randomNumber.get());
    }


    public static void main(String[] args) {
        Proveedores proveedores = new Proveedores();

        proveedores.randomNumber();

    }

}
