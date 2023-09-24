package com.examples;

import java.util.Scanner;

@SuppressWarnings("all")
public class checkPrime {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        for (int attempt = 0; attempt >= 0; attempt++) {
            System.out.print("Enter number: ");
            int number = sc.nextInt();
            boolean flag = true;

            for (int i = 2; i <= number / 2; i++) {
                if (number % i == 0) {
                    flag = false;
                }
            }

            if (flag) {
                System.out.println(number + " is prime");
            } else {
                System.out.println(number + " is composite");
            }
        }
    }
}
