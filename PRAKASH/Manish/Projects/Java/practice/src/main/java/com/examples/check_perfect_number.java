package com.examples;

import java.util.ArrayList;

public class check_perfect_number {
    public static void check(int number) {
        int num = number;
        int sum = 0;
        ArrayList<Integer> al = new ArrayList<Integer>();
        for (int i = 1; i < num; i++) {
            if (num % i == 0) {
                al.add(i);
            }
        }

        for (int j = 0; j < al.size(); j++) {
            sum += al.get(j);
        }

        if (sum == num) {
            System.out.println(num + " is perfect number");
        }

        else {
            System.out.println(num + " not a perfect number");
        }
    } 
}
