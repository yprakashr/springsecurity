package com.multithreading;

public class sleepingThread {
    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 20; i++) {
            Thread.sleep(500);
            System.out.println(i);
        }
    }
}
