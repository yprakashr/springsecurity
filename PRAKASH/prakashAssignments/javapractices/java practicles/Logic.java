package core_java;

public class Logic {
public String helloName(String name) {
	return "Hello "+ name+"!";
}
	public static void main(String[] args) {
	Logic obj=new Logic();
	String result=obj.helloName("sujatha");
	System.out.println(result);
	}
}
