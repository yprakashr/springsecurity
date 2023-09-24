package javatechniques;

public class Swapingtwonumbers {
public static void main(String[] args) {
	int c,a=5,b=2;

	//Logic -1
//	c=a;
//	a=b;
//	b=c;


	//logic -2:	
//	a=a+b;
//	b=a-b;
//	a=a-b;


//	Logic-3
//	a=a*b;
//	b=a/b;
//	a=a/b;

	
//Logic -4  -bitwise Operator

//	a=a^b;	
//	b=a^b;
//	a=a^b;  
	
//	Logic -5
	
	a=a+b-(b=a);

	
	System.out.println("a :"+a+"b :"+b);
}
}
