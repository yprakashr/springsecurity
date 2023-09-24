package variables;
interface Myinterface{
	public static final int x=15;
	public abstract void m1();
}

interface Myinterface2{
 int z=20;
	default void m3() {
	System.out.println("from default");	
	}
	static void m4() {
		System.out.println("from static method");
	}
}
interface Myinterface1 extends Myinterface,Myinterface2{
	public static final int y=20;
	public abstract void m2();
}
class Interfac implements Myinterface1{
public void m1() {
	System.out.println("this is method1");
}
public void m2() {
	System.out.println("this is method2");
}
public void m3() {
	System.out.println("this is method3");
}
public void m4() {
	System.out.println("this is method4");
}

public static void main(String[] args) {
	Interfac i=new Interfac();
	i.m1();
	i.m4();
	i.m2();
	i.m3();

//	Myinterface2.m4();
	System.out.println(x);
	System.out.println(y);
	System.out.println(z);
	
}
}
