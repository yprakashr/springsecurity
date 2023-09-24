package javatechniques;

public class Sumofarray {
public static void main(String[] args) {
	int a[]= {5,6,6,3,6,2,1,6};
	int b=0;

//	for(int i=0;i<a.length;i++) {
//		b=b+a[i];
//	}
	
	for(int value:a) {
		b=b+value;
	}
	
System.out.println(b);




}}



