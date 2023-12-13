package javatechniques;

public class fibanociseries {
public static void main(String[] args) {
	
	int sum,n2=1,n1=0;
	
	System.out.print(n1);
	for(int i=2;i<10;i++) {
		sum=n1+n2;
		System.out.print(" "+sum);
		n1=n2;
		n2=sum;
	}
	
	
}
}
