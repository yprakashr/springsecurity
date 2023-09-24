package core_java;

 class Outer {
class Inner{
void innermethod() {
	System.out.println("this is inner class method");
}
}
void outermethod() {
	System.out.println("this is outer class method");
//	call from instance method to instance method
Inner i=new Inner();
	i.innermethod();
	public static void main(String[] args) {
	Outer o=new Outer();
	o.outermethod();
	
}
	//it will generate to .class methods
//	Outer.Inner i=new Outer().new Inner();
//	i.innermethod();
}
}
