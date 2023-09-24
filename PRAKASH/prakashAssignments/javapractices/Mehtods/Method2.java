package Mehtods;

public class Method2 {
	int sum;
public static void main(String[] args) {
	Method2 m=new Method2();
	Methoda m1=new Methoda();
m.method2(m1);
int sr=m.method3(m1);
System.out.println(sr);

}
void method2(Methoda s) {
	System.out.println(s.name +s.marks +s.number);
}
int method3(Methoda s1) {
	sum=s1.a+s1.b+s1.c+s1.d;
	return sum;
}}
