package singletonpattern;

public class SingletonEnum {
	public static void main(String[] args) {

		Abc4 obj1=Abc4.Instance;
		obj1.i=5;
		obj1.show();
		
		Abc4 obj2=Abc4.Instance;
		obj2.i=6;
		obj2.show();
		
//		while we working on deserializaiton we use 
//		readObject; it will automaticaly create an abject on singleton
//		readResolve; thats y we should use readResolve 
	}
}

enum Abc4 {	
	Instance;   //it has by default private constructor like below
//	public static Abc4 getInstance() {
//		
//	}
	int i;
	public void show() {
		System.out.println(i);
	}

}

