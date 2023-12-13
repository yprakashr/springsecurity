package com.enums;

// initialize the specific value to the enum constants by defining fields and constructors.
enum Cars1 {
    BMW(52), BENZ(63), OPEL(41), SUZUKI(20);

    int val;

    Cars1(int value) {
        this.val = value;
    }

    public static void main(String[] args) {
        for (Cars1 c : Cars1.values()) {
            System.out.println(c + " : " + c.val);
        }
    }
}
