package core_java;

 class Currentthread implements Runnable {

	@Override
	public void run() {
		// TODO Auto-generated method stub
	
	}
public static void main(String[] args) {
	Currentthread c=new Currentthread();
	Thread t1=new Thread(c);
	t1.start();
	Thread t=Thread.currentThread();
	System.out.println(t+"main method");
	
}
}

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 