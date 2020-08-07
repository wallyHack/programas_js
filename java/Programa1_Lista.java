
public class Programa1_Lista{
    public static void main(String args[]){
        
        for(int i=100; i>=1; i--){                        
            // System.out.println(i);
            for(int j=0; j<=99; j++){
                // System.out.println(j);
                System.out.println(i-j + " - " + j + " = " + ((i-j)-j));
                if(i-j == 50){
                    break;
                }
            }
            break;
        }
    }
}