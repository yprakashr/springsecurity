package multithread;

public class Synchronized {
	int amount = 10000;

	public synchronized void withdraw(int amount) throws Exception {
		System.out.println("Going to withdraw ");
		if (this.amount < amount) {
			System.out.println("this amount is less then your request");
			wait();
		} else {
			System.out.println("amount withdraw is successfull ");
		}
		this.amount = this.amount - amount;
	}

	public synchronized void deposit(int amount) {
		System.out.println("Going to deposit");
		this.amount = this.amount + amount;
		System.out.println("deposit completed");
		notify();
	}
}

//Synchronized methods are 
//wait(), notify(), notifyAll();
