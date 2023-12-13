package com.exceptions;

import java.util.Scanner;

@SuppressWarnings("all")
public class finally_keyword {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter name: ");
        String name = sc.nextLine();
        try {
            System.out.println(name.charAt(999));
        } catch (Exception e) {
            System.out.println("EXCEPTION: Name out of bounds");
        } finally {
            System.out.println("Program completed");
        }
    }
}