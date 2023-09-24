package variables;

public class meth1 {
String meth(int a,int b) {
	System.out.println(10);
System.out.println((54+a)-b);
int value = new meth1().meth5();
System.out.println(value);
return "java";
}
int meth2(int a) {
	int b=5;
	System.out.println(b-a);
	return(5*5)-b;
}
void meth3() {
	System.out.println("start");
System.out.println(new meth1().meth4());	
System.out.println(40);
}
String meth4() {
	System.out.println("today is monday");
return new meth1().meth(4,8);

}
int meth5() {
	meth1 obj=new meth1();
	System.out.println(99);
	return obj.meth2(5);
}
public static void main(String[] args) {
	meth1 aobj=new meth1();
	aobj.meth3();
}
}
