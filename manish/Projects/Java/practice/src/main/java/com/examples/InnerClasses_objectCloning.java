package com.examples;

public class InnerClasses_objectCloning implements Cloneable {
    int a;
    int b;
    static int e;

    // accessing inner class members in outer class
    int c = new XX().x;
    int d = XX.z;
    int i = XX.z;

    // inner class
    class XX {
        int x;
        int y;
        static int z = e;
        static int r = e;

        static int getX() {
            return z;
        }
    }

    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

}

class ZZ {
    public static void main(String[] args) throws CloneNotSupportedException {
        InnerClasses_objectCloning obj = new InnerClasses_objectCloning();
        obj.a = 1;
        obj.b = 2;
        obj.c = 3;

        // object cloning
        InnerClasses_objectCloning obj2 = (InnerClasses_objectCloning) obj.clone();

        // creating object of iner class
        InnerClasses_objectCloning.XX obj1 = obj.new XX();
        obj1.x = 5;
        obj1.y = 6;

        System.out.println(obj.c);

        System.out.println(obj1.x);
        
        System.out.println(obj1.z);

        System.out.println(obj2.a);
        System.out.println(obj2.b);
    }
}