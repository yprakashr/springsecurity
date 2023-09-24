package singletonpattern;

public class DoublecheckedsingletonLocking {
	public static void main(String[] args) {
		Thread t1 = new Thread(new Runnable() {

			@Override
			public void run() {
				Abc3 obj = Abc3.getInstance();
			}
		});
		Thread t2 = new Thread(new Runnable() {

			@Override
			public void run() {
				Abc3 obj = Abc3.getInstance();
			}
		});
		t1.start();
		t2.start();
	}

}

class Abc3 {
public	static Abc3 obj ;

	private Abc3() {
		System.out.println("Instanciation created successfully");
	}

	@SuppressWarnings("unused")
	public static  Abc3 getInstance() {
		if (obj == null) {
			synchronized(Abc.class) {
			if(obj==null) {
			obj = new Abc3();
		}}}
		return obj;
	}
}
