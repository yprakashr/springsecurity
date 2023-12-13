package com.examples;

public class pyramid {
    public static void main(String[] args) {
        for (int i = 0; i < 20; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("." + "  ");
            }
            System.out.println();
        }
    }
}
