package com.multithreading;

class myThread4 extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("thread 1 running.........." + i);
        }
    }
}

class myThread5 extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("thread 2 running.........." + i + " .......... ");
        }
    }
}

public class multiThreadingDemo {
    public static void main(String[] args) throws Exception {
        myThread4 t1 = new myThread4();
        myThread5 t2 = new myThread5();
        t1.start();
        t1.join(5000);
        t2.start();
    }
}
