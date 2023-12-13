package javatechniques;

import java.util.Scanner;

public class REverseanumber {
public static void main(String[] args) {
	
	Scanner sc=new Scanner(System.in);
System.out.println("Enter the value on your wish :");
int num=sc.nextInt();


//1.Using algorithm
//
//int rev=0;
//while(num!=0) {
//rev=rev*10+num%10;
//num=num/10;	
//}

//2.Uisng StirngBuffer Class

//StringBuffer sb=new StringBuffer(String.valueOf(num));
//StringBuffer rev=sb.reverse();
////System.out.println(new StringBuffer(String.valueOf(num)));
//


//3.Uisng StirngBuilder Class

StringBuilder sbl=new StringBuilder(); 
sbl.append(num);
StringBuilder rev=sbl.reverse();


System.out.println("Reverse number is :"+rev);
}}
