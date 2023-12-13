package core_java;

public class Multithreadjoin implements Runnable{
String name;
	Multithreadjoin(String name1){
		name=name1;
	}
	@Override
	public void run() {
		for(int i=0;i<=10;i++) {
			try {
				Thread.sleep(10);
			}catch(InterruptedException e){
				e.printStackTrace();
			}
			System.out.println(name+":"+i);
		}
		
	}
public static void main(String[] args) throws InterruptedException {
	Multithreadjoin m1=new Multithreadjoin("thread1");
	Multithreadjoin m2=new Multithreadjoin("thread2");
Thread t1=new Thread(m1);
Thread t2=new Thread(m2);
t1.start();
t1.join();
t2.start();
t2.join();
for(int i=0;i<=10;i++) {
	System.out.println("main :"+i);
}
}
}
