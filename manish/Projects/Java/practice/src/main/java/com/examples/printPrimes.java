package com.examples;

import java.util.Scanner;

@SuppressWarnings("all")
public class printPrimes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter bound to print primes : ");
        int num = sc.nextInt();

        for (int bound = 0; bound < num; bound++) {
            boolean flag = true;

            for (int i = 2; i <= bound / 2; i++) {
                if (bound % i == 0) {
                    flag = false;
                }
            }

            if (flag) {
                System.out.println(bound);
            }
        }
    }
}
