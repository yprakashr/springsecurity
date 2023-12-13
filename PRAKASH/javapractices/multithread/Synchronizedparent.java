package multithread;

public class Synchronizedparent {
	public static void main(String[] args) throws Exception  {
//		Thread t1=new Thread();
		Synchronized s=new Synchronized();
		
		new Thread() {
			public void run() {
				s.deposit(20000);
			}
		}.start();
		
		new Thread() {
			public void run() {
				
						try {
							s.withdraw(250000);
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
					
			}
		}.start();
	}
}
