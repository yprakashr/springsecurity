package clonable;

public class ClassC {
public static void main(String[] args) throws CloneNotSupportedException {
	ClassB obj1=new ClassB();
	System.out.println(obj1.x+" "+obj1.y);
	ClassB obj2=obj1;
	obj2.x=50;
	System.out.println(obj1.x+" "+obj1.y+" "+obj2.x);
	ClassB obj3=obj1.show();	
	ClassB obj4=obj3;
	
	obj4.y=999;
	
	System.out.println(obj1.x+" "+obj1.y+" "+obj2.x+" "+obj4.y);
	System.out.println();
}
}
