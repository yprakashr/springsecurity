package com.pack2;

public class Deamon implements Runnable {


	public void run() {
	
		System.out.println("Welcome to deamon method");
	}
	public static void main(String[] args) {
		Deamon d=new Deamon();
		Thread t=new Thread(d);
//		Thread.currentThread().setDaemon(true);
		t.setDaemon(true);
		t.start();
		System.out.println(t.isDaemon());
	}

}
