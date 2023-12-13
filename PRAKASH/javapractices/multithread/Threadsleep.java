package multithread;
//To know thread details
public class Threadsleep implements Runnable {
String name;
Threadsleep(String name1){
	name=name1;
}
	public void run() {
		for(int i=1;i<=10;i++) {
			System.out.println(name+":"+i);
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}
	}
	
//	public void run() {
//	System.out.println("thread is running");
//Thread t=Thread.currentThread();
//System.out.println(t);
//}
	
	public static void main(String[] args) {
		Threadsleep m2=new Threadsleep("prakash");
		Threadsleep m3=new Threadsleep("prakash1");
		Thread t1=new Thread(m2);
		Thread t4=new Thread(m3);
		t1.start();
//		t1.setPriority(10);
		t4.start();
		for(int i=1;i<=10;i++) {
			System.out.println("main :"+i);
		}
//		Thread t2=Thread.currentThread();
//		System.out.println(t2);
	}}


