package com.exceptions;

import java.io.FileNotFoundException;

public class Throwing_checked_exception {
    static void method() throws FileNotFoundException {

        throw new FileNotFoundException();
    }

    public static void main(String[] args) {
        try {
            method();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
