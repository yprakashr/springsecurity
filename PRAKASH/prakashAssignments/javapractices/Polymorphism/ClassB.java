package Polymorphism;

public class ClassB extends ClassA {
	public  void method1() {
		System.out.println("this is static method3");
	}
	public  void method2() {
		System.out.println("this is static method4");
	}
public static void main(String[] args) {
	ClassB a=new ClassB();
	a.method1();
	a.method2();
	ClassA a1=new ClassB();
	a1.method1();
	a1.method2();
}
}
