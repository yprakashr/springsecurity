package javatechniques;

public class EvenorOddofanarray {
public static void main(String[] args) {
	
	int b,a[]= {5,6,3,4,6,4,3,3,2,6};
	System.out.print("Even :");
	
	for(int i=0;i<a.length;i++) {
		
		if(a[i]%2==0) {
		
		System.out.print(a[i]+",");
		
	}
	
	}
	System.out.println("");
	System.out.println("odd :");
for(int o:a) {
	if (a[o]%2==0) {
		System.out.print(o);
	}
}
}
}
