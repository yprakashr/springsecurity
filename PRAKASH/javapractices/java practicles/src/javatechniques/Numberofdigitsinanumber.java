package javatechniques;

public class Numberofdigitsinanumber {

	public static void main(String[] args) {
	
		int num=646416;
		int len,count = 0;
while(num>0) {
	num=num/10;
 count++;
}
System.out.println(count);
}
}
