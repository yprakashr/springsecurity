package com.examples;

public class fibonacci_series {
    public static void main(String[] args) {
        long num1 = 0;
        long num2 = 1;
        System.out.println(num1);
        System.out.println(num2);

        for (long i = 0; i < 50; i++) {
            long temp = num1 + num2;
            num1 = num2;
            num2 = temp;
            System.out.println(temp);
        }
    }
}
