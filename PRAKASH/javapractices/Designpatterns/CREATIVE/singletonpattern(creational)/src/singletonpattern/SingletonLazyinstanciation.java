package singletonpattern;

public class SingletonLazyinstanciation {
	public static void main(String[] args) {
		Abc obj=Abc.getInstance();
		Abc obj1=Abc.getInstance();
	}
	
	
}

class Abc1{
	static  Abc1 obj; //eagerly
private Abc1() {
	System.out.println("Instanciation created sauccessfully");
}
@SuppressWarnings("unused")
public static Abc1 getInstance() {  //Lazy instanciation
	
	if(obj==null) {
	
	obj=new Abc1();
}
	return obj;	
}
}
