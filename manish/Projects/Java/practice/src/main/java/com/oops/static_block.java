package com.oops;

public class static_block {
    static int i = 10;
    static {
        System.out.println("hello");
        i = i + 5;
    }

    public static void main(String[] args) {
        System.out.println(i+10);
    }
}
