package com.multithreading;

public class gettingPriority {
    public static void main(String[] args) {
        myThread4 t1 = new myThread4();
        t1.setPriority(5);
        int t1Priority = t1.getPriority();
        myThread5 t2 = new myThread5();
        t2.setPriority(1);
        int t2Priority = t2.getPriority();
        System.out.println("t1 Priority: " + t1Priority);
        System.out.println("t2 Priority: " + t2Priority);
    }
}
