package singletonpattern;

public class SingletonEagerlyinstanciation {

	public static void main(String[] args) {
		Abc obj1=Abc.getInstance();
		Abc obj2=Abc.getInstance();
	}
	
	
}

class Abc{
	static  Abc obj=new Abc(); //eagerly
private Abc() {
	System.out.println("Instanciation created sauccessfully");
}
public static Abc getInstance() {  //Lazy instanciation
	

	return obj;	
}

}