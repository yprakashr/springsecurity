package javatechniques;

public class JunkorSpecialchRemovinginaString {

	public static void main(String[] args) {
	String s="!@#$%^&*() latin string 0123456789";
	
	System.out.println(s);
String a=s.replaceAll("[^a-zA-Z0-9]", "");
System.out.println(a);
	}

}
