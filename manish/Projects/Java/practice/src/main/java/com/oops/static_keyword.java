package com.oops;

public class static_keyword {

    static int count = 0;
    int id;
    static String brand = "MRF";
    /*
     * by declaring a member as static, memory is allocated only 1 time for the
     * property
     */

    static_keyword() {
        count++;
        System.out.println("count: " + count);
    }

    static_keyword(int a) {
        id = a;
    }

    static void display() {
        System.out.println("count: " + count);
        // System.out.println(id); // ERROR
        // static method can only access static members
    }

    void meth() {
        System.out.println("id: " + id);
        System.out.println("brand: " + brand);
        System.out.println("-------------------------");
    }

    public static void main(String[] args) {
        static_keyword obj1 = new static_keyword();
        obj1.meth();
        static_keyword obj2 = new static_keyword();
        obj2.meth();
        static_keyword obj3 = new static_keyword();
        obj3.meth();
        static_keyword obj4 = new static_keyword(4);
        obj4.meth();

        // static method can be directly accessed without creating object
        display();
    }
}
