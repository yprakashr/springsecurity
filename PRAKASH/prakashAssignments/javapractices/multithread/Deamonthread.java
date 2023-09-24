package multithread;

public class Deamonthread implements Runnable {
	
	//main thread is not by defaultly deamon thread
	public void run() {
		System.out.println("welcome to deamon thread");
	}
	public static void main(String[] args) {
		Deamonthread d=new Deamonthread();
		Thread t1=new Thread(d);
		
		t1.setDaemon(true);
		
		t1.start();
		
		System.out.println(t1.isDaemon());
	}
}






