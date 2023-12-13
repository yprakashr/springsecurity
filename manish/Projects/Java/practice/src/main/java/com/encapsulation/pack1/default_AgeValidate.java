package com.encapsulation.pack1;

public class default_AgeValidate {
    static void validate(int age) {
        if (age <= 18) {
            System.out.println("invalid age");
        } else {
            System.out.println("valid age");
        }
    }

    public static void main(String[] args) {

        // accessing default method in same class
        validate(20);

    }
}
