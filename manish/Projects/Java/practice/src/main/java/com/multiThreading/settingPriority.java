package com.multithreading;

public class settingPriority {
    public static void main(String[] args) {
        myThread4 t1 = new myThread4();
        t1.setPriority(5);
        myThread5 t2 = new myThread5();
        t2.setPriority(1);
        t1.start();
        t2.start();
    }
}
