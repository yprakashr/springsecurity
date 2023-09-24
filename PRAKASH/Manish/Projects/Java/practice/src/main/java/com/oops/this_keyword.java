package com.oops;

@SuppressWarnings("all")
class ThisTest {
    int id;
    String name;

    // using this keyword
    ThisTest(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // without using this keyword
    ThisTest(String name, int id) {
        name = name;
        id = id;
    }

    void disp() {
        System.out.println(id + " : " + name);
    }
}

public class this_keyword {
    public static void main(String[] args) {
        ThisTest obj1 = new ThisTest(1, "Manish");
        obj1.disp();
        ThisTest obj2 = new ThisTest("Manish", 1);
        obj2.disp();
    }
}
