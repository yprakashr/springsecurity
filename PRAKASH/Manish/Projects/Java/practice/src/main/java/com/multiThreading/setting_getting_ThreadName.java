package com.multithreading;

class myThread3 implements Runnable {

    public void run() {
        System.out.println("Thread is running....");
    }

}

public class setting_getting_ThreadName {
    public static void main(String[] args) {
        Thread t1 = new Thread("Thread-XYZ");
        String t1Name = t1.getName();
        System.out.println(t1Name);

        myThread3 t = new myThread3();
        Thread t2 = new Thread(t, "Thread-ABC");
        String t2Name = t2.getName();
        System.out.println(t2Name);
        
    }
}
