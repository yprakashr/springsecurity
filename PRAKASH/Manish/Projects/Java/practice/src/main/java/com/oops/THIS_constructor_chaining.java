package com.oops;

public class THIS_constructor_chaining {
    int id;
    String name;
    float marks;

    THIS_constructor_chaining(int num, String str) {
        this.id = num;
        this.name = str;
    }

    /*
     * The this() constructor call should be used to reuse the constructor from the
     * constructor. Also called constructor chaining
     */
    THIS_constructor_chaining(float marks, int num, String str) {
        this(num, str);
        this.marks = marks;
    }

    void display() {
        System.out.println(id + " : " + name + " : " + marks);
    }

    public static void main(String[] args) {
        THIS_constructor_chaining obj = new THIS_constructor_chaining(52.36f, 2, "Rama");
        obj.display();
    }
}
