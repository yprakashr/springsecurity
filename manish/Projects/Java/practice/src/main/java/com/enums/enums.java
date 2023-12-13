package com.enums;

// ENUM outside class
enum months {
    jan, feb, march, april
}

public class enums {

    // ENUM inside class
    enum season {
        summer, winter, spring, fall
    }

    public static void main(String[] args) {
        for (season s : season.values()) {
            System.out.println(s);
        }
        System.out.println("---------------");
        for (months m : months.values()) {
            System.out.println(m);
        }
    }
}
