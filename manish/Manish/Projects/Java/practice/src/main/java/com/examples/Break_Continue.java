package com.examples;

public class Break_Continue {
    public static void main(String[] args) {
        int x = 0;
        do {
            if (x == 5) {
                x++;
                continue;
            }
            System.out.println(x);
            x++;
            if (x == 7) {
                x++;
                break;
            }
        } while (x < 10);

        System.out.println("-------------------");

        int y = 0;
        while (y < 10) {
            if (y == 5) {
                y++;
                continue;
            }
            System.out.println(y);
            y++;
            if (y == 7) {
                y++;
                break;
            }
        }

        System.out.println("-------------------");

        for (int num = 0; num < 10; num++) {
            if (num == 5) {
                continue;
            }
            System.out.println(num);
            if (num == 7) {
                break;
            }
        }
    }
}
