package core_java;

public class MultiTaskDemo1 extends Thread {

	public void run() {
	System.out.println("this is thread class extended");
		
	}
	public static void main(String[] args) {
	
		MultiTaskDemo1 m1=new MultiTaskDemo1();
		Thread t1=new Thread(m1);
		t1.start();
	}
}


















