package com.oops;

class Telephone {
    void call() {
        System.out.println("calling...");
    }

    void ring() {
        System.out.println("ringing....");
    }
}

class Smartphone extends Telephone {
    void mail() {
        System.out.println("mailing...");
    }

    void capture() {
        System.out.println("capturing photo....");
    }
}

class MyClass {
    void add(int num1, int num2) {
        int sum = num1 + num2;
        System.out.println("sum: " + sum);
    }

    void add(String s1, String s2) {
        String s3 = s1 + s2;
        System.out.println("Concatenated String; " + s3);
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        Telephone telephone = new Telephone();
        telephone.call();
        telephone.ring();

        // creating smartphone object by referring telephone
        /* This is dynamic method dispatch or runtime polymorphism */
        Telephone mobile = new Smartphone();
        mobile.ring();
        mobile.call();

        // Compile time polymorphism by method overloading
        MyClass myClass = new MyClass();
        myClass.add("Tele", "Phone");
        myClass.add(32, 45);
    }
}
