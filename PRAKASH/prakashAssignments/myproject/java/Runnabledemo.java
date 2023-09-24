package core_java;

public class Runnabledemo implements Runnable {

	@Override
	public void run() {
		// TODO Auto-generated method stub
		System.out.println("thread is in runnable class");
	}
public static void main(String[] args) {
	Runnabledemo r=new Runnabledemo();
	Thread t=new Thread(r);
	t.start();
}
}
