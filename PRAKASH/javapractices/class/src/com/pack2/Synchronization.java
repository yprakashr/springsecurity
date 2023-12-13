package com.pack2;

public class Synchronization {
int amount =10000;
public synchronized void withdraw(int amount) throws Exception
{
System.out.println("going to withdraw");
System.out.println(this.amount);
if(this.amount<amount) {
	System.out.println("less balance waiting to deposit");
	wait();
	}
System.out.println(this.amount);
	this.amount=this.amount-amount;
	System.out.println("withdraw completed");


}
public synchronized void deposit(int amount) {
	System.out.println("going to deposit");
this.amount=this.amount+amount;
System.out.println("Deposit completed");
notify();
}
public static void main(String[] args) {
	Synchronization s=new Synchronization();
	new Thread() {
public void run() {
	try {
		s.withdraw(15000);
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}
	}.start();
	

new Thread() {
public void run() {
s.deposit(1000);
}
}.start();

}
}
