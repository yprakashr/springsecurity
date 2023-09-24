package multipleinheritance;

public class ClassC extends ClassB{
void method3() {
	System.out.println("this is method4");
	super.method3();

}
void method2() {
	System.out.println("this is method5");

}
public static void main(String[] args) {
	ClassC c=new ClassC();

	c.method2();
	c.method3();

}
}
