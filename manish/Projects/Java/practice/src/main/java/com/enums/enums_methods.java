package com.enums;

public class enums_methods {
    enum months {
        jan, feb, march, april
    }

    public static void main(String[] args) {

        // values() method returns array of enum
        for (months m : months.values()) {
            System.out.println(m);
        }

        // valueOf() method returns the value of given constant enum.
        System.out.println("value of feb: " + months.valueOf("feb"));

        // ordinal() method returns the index of the enum value.
        System.out.println("index of march: " + months.valueOf("march").ordinal());
    }
}
