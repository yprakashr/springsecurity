package com.multithreading;

class myThread7 extends Thread {
    @Override
    public void run() {
        System.out.println(currentThread().getName());
    }

    public myThread7(String name) {
        super(name);
    }

}

public class currentThreadName {
    public static void main(String[] args) {
        myThread7 t1 = new myThread7("my thread");
        t1.start();
    }
}
