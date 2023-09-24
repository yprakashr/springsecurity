package com.oops;

import com.my_methods.*;

class Animal {
    void eat() {
        System.out.println("Animal is Eating....");
    }

    void sleep() {
        System.out.println("Animal is Sleeping....");
    }

    void walk() {
        System.out.println("Animal is Walking....");
    }

    void eat(int num, String str) {
        // method overloading
    }
}

// Monkey class ineriting animal class
class Monkey extends Animal {

    void climb() {
        System.out.println("Monkey is Climbing...");
    }

    @Override
    void eat() {
        // method overriding
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Animal obj1 = new Animal();
        obj1.eat();
        obj1.sleep();
        obj1.walk();

        // Monkey object can acquire properties of animal class
        Monkey obj2 = new Monkey();
        obj2.climb();
        obj2.eat();
        obj2.sleep();

        Animal obj3 = new Monkey();
        System.out.println(typeOf.typeof(obj3));
    }
}
