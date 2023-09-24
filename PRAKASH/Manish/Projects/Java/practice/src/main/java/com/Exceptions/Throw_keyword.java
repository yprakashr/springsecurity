package com.exceptions;

public class Throw_keyword {
    public static void validate(int age) {
        if (age < 18) {
            throw new ArithmeticException("not eligible to vote");
        } else {
            System.out.println("Eligible to vote");
        }
    }

    public static void main(String[] args) {
        validate(10);
    }
}
