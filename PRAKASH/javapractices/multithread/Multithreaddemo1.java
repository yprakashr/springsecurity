package multithread;

public class Multithreaddemo1 extends Thread{

	public void run() {
		System.out.println("run method is executed by JVM");

	
}
	public static void main(String[] args) {
		Multithreaddemo1 demo1=new Multithreaddemo1();
		Thread td=new Thread(demo1);
	td.start();
	
	}
	}
