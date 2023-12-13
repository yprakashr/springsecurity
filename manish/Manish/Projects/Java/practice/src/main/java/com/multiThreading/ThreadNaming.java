package com.multithreading;

class myThread6 extends Thread {
    public void run() {
        System.out.println("running....");
    }

    myThread6(String threadname) {
        super(threadname);
    }

    myThread6() {
    }
}

public class ThreadNaming {
    public static void main(String[] args) {
        myThread6 t1 = new myThread6();
        myThread6 t2 = new myThread6("custom Thread2");
        System.out.println("t1 name: " + t1.getName());
        System.out.println("t2 name: " + t2.getName());
        t1.start();
        t2.start();
        t1.setName("custom Thread1");
        System.out.println("After changing name of t1: " + t1.getName());
    }
}
