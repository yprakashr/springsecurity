package Polymorphism;

public class Class2 extends Class1 {
    public void add(int a,int b) {
        System.out.println(a-b);
        System.out.println("New Fea");
        }
public static void main(String args[]) {
	Class2 obj = new Class2();
    obj.add(10, 20);
    Class1 obj1=new Class1();
    obj1.add(10, 20);
}
}
