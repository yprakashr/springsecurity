package javatechniques;

import java.util.Scanner;

public class CheckpallindromeString {
public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
	System.out.println("enter a string to check it is pallindrome");
	String str=sc.next();
	String org_str=str;
	String str1="";
//	1.using string concatination
 	for(int i=str.length()-1;i>-1;i--) {
 	 str1=str1+str.charAt(i);
 	}


	if(str1.equals(org_str)) {
		System.out.println("given string is pallindrome");
	}else {
		System.out.println("given string isnot pallindrome");
	}
	
}}



