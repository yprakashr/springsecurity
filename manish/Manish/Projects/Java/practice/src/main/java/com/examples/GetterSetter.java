package com.examples;

class GetterSetters {
    String name;
    int age;

    public GetterSetters(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public GetterSetters() {
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}

public class GetterSetter {
    public static void main(String[] args) {
        var obj1 = new GetterSetters("Manish", 23);
        System.out.println(obj1.getName() + " : " + obj1.getAge());
        var obj2 = new GetterSetters();
        obj2.setName("John");
        obj2.setAge(35);
        System.out.println(obj2.getName() + " : " + obj2.getAge());
    }
}