package core_java;

public class methodinouterclasss {
void outermethod() {
	class Inner{
		void innermehtod() {
			System.out.println("inner class method");
		}
	}
	Inner i=new Inner();
i.innermehtod();	
}
public static void main(String[] args) {
	Outer o=new Outer();
	o.outermethod();
}

}
