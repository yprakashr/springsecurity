package singletonpattern;

public class SingletonSynchronized {
	public static void main(String[] args) {
		Thread t1 = new Thread(new Runnable() {

			@Override
			public void run() {
				Abc2 obj = Abc2.getInstance();
			}
		});
		Thread t2 = new Thread(new Runnable() {

			@Override
			public void run() {
				Abc2 obj = Abc2.getInstance();
			}
		});
		t1.start();
		t2.start();
	}

}

class Abc2 {
public	static Abc2 obj ;

	private Abc2() {
		System.out.println("Instanciation created successfully");
	}

	@SuppressWarnings("unused")
	public static synchronized Abc2 getInstance() {
		if (obj == null) {

			obj = new Abc2();
		}
		return obj;
	}
}
