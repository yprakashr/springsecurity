package com.exceptions;

class invalidAgeException extends Exception {
    public invalidAgeException(String ex) {
        super(ex);
    }
}

class zeroAgeException extends Exception {
    public zeroAgeException(String ex) {
        super(ex);
    }
}

public class custom_exception {

    static void validate(int age) throws invalidAgeException, zeroAgeException {
        if (age >= 18) {
            System.out.println("You're eligible to vote");
        } else if (age == 0) {
            throw new zeroAgeException("Age cannot be 0");
        } else {
            throw new invalidAgeException("Invalid Age: " + age + " , age must be greater than or equal to 18");
        }
    }

    public static void main(String[] args) {

        // multiple catch block 1
        try {
            validate(15);
            validate(0);
        } catch (invalidAgeException e) {
            e.printStackTrace();
        } catch (zeroAgeException e) {
            e.printStackTrace();
        } finally {
            System.out.println("Program ended.");
        }

        // multiple catch block 2
        try {
            validate(0);
            validate(15);
        } catch (invalidAgeException | zeroAgeException e) {
            e.printStackTrace();
        } finally {
            System.out.println("Program ended.");
        }
    }

}
