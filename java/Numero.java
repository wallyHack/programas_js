
public class Numero{
    public static void main(String args[]){

        for(int i=1; i<=10; i++){
            int numero = i;
            if(numero % 2 == 0){
                System.out.println(numero + " es par.");
            }else{
                System.out.println(numero + " es impar.");
            }
        }
    }
}