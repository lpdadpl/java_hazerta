package hazerte.com.presentacion;

import hazerte.com.persistencia.Connection;

import java.sql.SQLException;

public class Inicio
{
    public static void main(String[] args) {
        System.out.println("aplicacion inicida");
        Connection c1 = new Connection();
        try{
            c1.openConnection();
        } catch (ClassNotFoundException e){
            System.out.println(e.toString());
        } catch (SQLException e) {
            System.out.println(e.toString());
        }
    }
}
