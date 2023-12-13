package com.oops;

@SuppressWarnings("all")
class Outer {
    static int id;
    static String name;

    static void meth(int id, String name) {
        id = id;
        name = name;
        System.out.println("Outer id: " + id + "\nOuter name: " + name);
        System.out.println("---------------------------------------");
    }

    class Inner {
        static int id;
        static String name;

        static void meth(int id, String name) {
            id = id;
            name = name;
            System.out.println("Inner id: " + id + "\nInner name: " + name);
            System.out.println("---------------------------------------");
        }
    }
}

@SuppressWarnings("all")
public class inner_classes {
    public static void main(String[] args) {
        Outer out = new Outer();
        out.meth(1, "Manish");

        Outer.Inner in = out.new Inner();
        in.meth(2, "Ashish");

        Outer.meth(3, "Scooby");
        Outer.Inner.meth(4, "Divya");
    }
}
