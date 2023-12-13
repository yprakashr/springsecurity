package javatechniques;

public class Primeornot {

	public static void main(String[] args) {
		int num=20,count=0;
	if(num>1) {
	
		  for(int i=1;i<=num;i++) {
			  if(num%i==0) {
				  count++;
			  }
	
		  }	}else {
		System.out.println("number is not greater than one");
	}
		  if(count==2) {
			  System.out.println("nubmer is prime number");
		  }else {
			  System.out.println("not prime number");
		  }
	  }}


