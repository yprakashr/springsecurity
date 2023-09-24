package multithread;

public class Daemonthread1 implements Runnable{
	public void run() {
		System.out.println("welcome to deamon thread");
	}
	public static void main(String[] args) {
		Deamonthread d=new Deamonthread();
		Thread t1=new Thread(d);
		
		//t1.setDaemon(true);
		
		t1.start();
		//main thread is not daemon thread by default
		System.out.println(Thread.currentThread().isDaemon());
		//System.out.println(t1.isDaemon());
	
	
	}
}



