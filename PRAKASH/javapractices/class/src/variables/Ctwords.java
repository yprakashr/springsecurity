package variables;

import java.util.Scanner;

public class Ctwords {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("enter the sentence");
		Scanner s=new Scanner(System.in);
		String scr=s.nextLine();//Welcome to java
		int count=1;
		for (int i=0;i<scr.length()-1;i++) {
			if ((scr.charAt(i)==' ')&&(scr.charAt(i+1)!=' ')) {
				count++;
			}
		}
		System.out.println("number of words are: "+count);
		
		
	}

}
