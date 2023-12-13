package com.multithreading;

class myThread1 extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class creatingThread1 {
    public static void main(String[] args) {
        myThread1 t1 = new myThread1();
        t1.run();
    }
}
