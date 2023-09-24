package javatechniques;

import java.util.Scanner;

public class checkPallindrome {
public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
	System.out.println("enter an number on your own");
	int num=sc.nextInt();
	int act=num;
	int rev=0;
	
	while(num!=0) {
		rev=rev*10+num%10;
		num=num/10;
	}
	System.out.println(rev);
	System.out.println(act);
	if(rev==act) {
		System.out.println("Entred number is pallindrome number");
	}else {
		System.out.println("Entered number is not a pallindrome number");
	}
	
	
}
}
