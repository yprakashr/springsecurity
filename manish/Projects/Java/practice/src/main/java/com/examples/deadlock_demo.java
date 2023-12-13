package com.examples;

public class deadlock_demo {
    static int num = 0;

    public static void meth1() {
        System.out.println(num);
        num++;
        meth2();
    }

    public static void meth2() {
        System.out.println(num);
        num++;
        meth1();
    }

    public static void main(String[] args) {
        meth1();
    }
}
