package multithread;
//getName() setName() get
class Twothreadsoneobject implements Runnable {
	int count;

	@Override
	public synchronized void run() {
		System.out.println("runnable");
		for (int i = 1; i <= 10000; i++) {
			count++;
		}

	}

	public static void main(String[] args) throws Exception {

		Twothreadsoneobject two = new Twothreadsoneobject();
		Thread t1 = new Thread(two);
		Thread t2 = new Thread(two);
		System.out.println("hi");
		System.out.println(two.count);
		t1.start();
		System.out.println(t1.isAlive());
		t1.join();
		t2.start();
		t2.join();
		t1.setName("My Thread 1");
		t2.setName("My Thread 2");
		System.out.println(t1.getName());
		System.out.println(t2.getName());
		t1.setPriority(1);
		t2.setPriority(10);
		System.out.println(t1.getPriority());
		System.out.println(t2.getPriority());
	}

}
