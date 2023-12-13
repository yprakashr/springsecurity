package com.multithreading;

class myThread2 implements Runnable {

    public void run() {
        System.out.println("myThread2 is running");
    }

}

public class creatingThread2 {
    public static void main(String[] args) {
        myThread2 t1 = new myThread2();
        Thread t = new Thread(t1);
        t.run();
    }
}
