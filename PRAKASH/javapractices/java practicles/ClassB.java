package core_java;

public class ClassB {
public String testMethod() {
	System.out.println(35);
return new ClassB().testMethod3(new ClassB().testMethod2())+new ClassB().testMethod4("here");

}
public int testMethod2() {
	System.out.println(25);
	return 25+5;
}
	public String testMethod3(int a) {
		System.out.println(15);
		return "is";
	}
	
	public String testMethod4(String s) {
		System.out.println(45);
	return "awesome";
	}
	
	
	
	public static void main(String[] args) {
		
		ClassB t=new ClassB();
		System.out.println("java"+t.testMethod());
	
}






}
