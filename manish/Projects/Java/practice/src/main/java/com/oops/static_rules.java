package com.oops;

public class static_rules {
    static int i = 10;
    int x = 23;

    void meth1() {
        System.out.println(i);
    }

    static void meth2() {
        System.out.println(i);
        // System.out.println(x); // static method can access only static data
    }
}
