package com.oops;

// interfaces 100% abstraction
interface IfaceA {

    final int age = 10;
    String name = "Manish";

    void disp();

    // static method in interface requires body
    static void disp2() {
        System.out.println("in disp2()");
    }

    // default method in interface requires body
    default void disp3() {
        System.out.println("in disp3()");
        disp7();
    }

    // private method in interface requires body
    static private void disp4() {
        System.out.println("in disp4()");
    }

    public void disp5();

    /*
     * Illegal combination of modifiers for the interface only public, private,
     * abstract, default, static and strictfp are permitted
     */

    abstract void disp6();

    // private modifier is allowed for methods only
    private void disp7() {
        System.out.println("in disp7()");
        disp4();
    }
}

// abstract class 0-100% abstraction
abstract class ClassAbs {
    static int age = 20;
    static String name = "Harish";

    int size = 45;
    String brand = "MRF";

    abstract void meth();

    abstract void meth1();

    /*
     * The abstract method meth in type ClassAbs can only set a visibility modifier,
     * one of public or protected
     */
    // abstract final void meth2();
}

// classA should implement all methods of interface IfaceA
class ClassA implements IfaceA {
    int id = 5;
    String gender = "male";

    @Override
    public void disp() {
        System.out.println("age: " + age);
        System.out.println("name: " + name);
    }

    @Override
    public void disp5() {
        System.out.println("in ClassA's disp5()");
    }

    @Override
    public void disp6() {
        System.out.println("in ClassA's disp6()");

    }

}

// classB must implement all methods of abstract class ClassAbs
class ClassB extends ClassAbs {

    @Override
    void meth() {
        System.out.println("ClassB's meth()");
    }

    @Override
    void meth1() {
        System.out.println("ClassB's meth1()");

    }

}

public class Abstraction {
    public static void main(String[] args) {
        ClassA obj = new ClassA();
        obj.disp();
        obj.disp3();
        obj.disp5();
        obj.disp6();

        IfaceA.disp2();

        System.out.println(IfaceA.age);
        System.out.println(IfaceA.name);

        System.out.println(ClassAbs.age);
        System.out.println(ClassAbs.name);

        ClassB obj1 = new ClassB();
        System.out.println(obj.gender);
        System.out.println(obj.id);
        obj1.meth();
        obj1.meth1();

        // ClassAbs obj2 = new ClassAbs();
        /* we cannot instantiate abstract class */

        // IfaceA.age=387;
        /* we cannot manipulate properties of interface as they are final */
    }
}