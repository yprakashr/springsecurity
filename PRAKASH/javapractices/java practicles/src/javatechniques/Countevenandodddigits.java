package javatechniques;

public class Countevenandodddigits {
public static void main(String[] args) {
	
	int res=0,even=0,odd=0,num=123456789;
	while(num>0) {
		res=num%10;
		num=num/10;
		if(res%2==0) {
			even++;
		}else {
			odd++;
		}
		
	
		
	}
	System.out.println(even+","+odd);
}
}
