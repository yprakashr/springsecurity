package core_java;

class MultiDemo implements Runnable {
String name;
MultiDemo(String name1){
	name=name1;
}
	@Override
	public void run() {
		// TODO Auto-generated method stub
	
		for(int i=1;i<=10;i++) {
			try {
				Thread.sleep(1000);
			}
			catch(InterruptedException e){
				System.out.println(e);
			}
			System.out.println(name+":"+i);
		}
	}
	public static void main(String[] args) {
		MultiDemo m1=new MultiDemo("thread1");
		MultiDemo m2=new MultiDemo("thread2");
		Thread t1=new Thread(m1);
		Thread t2=new Thread(m2);
		t1.start();
		t2.start();
		for(int i=0;i<=10;i++) {
			System.out.println("main :"+i); 
		}
	}

}
