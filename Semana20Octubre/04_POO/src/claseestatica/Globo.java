package claseestatica;

public class Globo {
    private int referencia = ++contadorGlobos;
    private static int contadorGlobos = 0;


    public int mostrarReferencia(){
        return referencia;
        }
}
