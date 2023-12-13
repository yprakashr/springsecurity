package core_java;

public class ClassA {
int meth1(int a) {
	System.out.println("meth1() called");
	return a;
}
int meth2( int a) {
	System.out.println("meth2() called");
	return a+a;
}
String meth3() {
	System.out.println("meth3 called");
	return "java is awesome";
}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
ClassA aobj=new ClassA();
System.out.println(aobj.meth1(1)+aobj.meth2(5));
System.out.println(aobj.meth3());
	}

}
