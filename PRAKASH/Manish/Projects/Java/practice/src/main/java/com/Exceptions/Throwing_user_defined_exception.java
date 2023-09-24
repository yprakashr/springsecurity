package com.exceptions;

class UD_Exception extends Exception {
    UD_Exception(String exception) {
        super(exception);
    }
}

public class Throwing_user_defined_exception {
    public static void main(String[] args) {
        try {
            throw new UD_Exception("my custom exception");
        } catch (UD_Exception e) {
            System.out.print("Exception caught: ");
            e.printStackTrace();
        }
    }
}