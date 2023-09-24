package javatechniques;

public class ReverseString {

	public static void main(String[] args) {
//	1.	Using Stirng concatination 
		String str="ABCD";
		String rev=null;
		
//	String	str1="";
	
//		int len=str.length();
//for(int i=len-1;i>-1;i--) {
//	str1=str1+str.charAt(i);
//}
	
//	2.String builder method
//	StringBuffer sb=new StringBuffer(str);
//	StringBuffer str1=sb.reverse();
	
//3.String buffer method		
		
		StringBuilder sb=new StringBuilder(str);
		StringBuilder str1=sb.reverse();
	
		System.out.println(str1);
	
		
		

	}

}
