package com.oops;

class Person1 {
    int id;
    String name;

    public Person1(int id, String name) {
        this.id = id;
        this.name = name;
    }

}

class Employee1 extends Person1 {
    float salary;

    public Employee1(int id, String name, float salary) {
        super(id, name);
        this.salary = salary;
    }

    public String toString() {
        return id + " : " + name + " : " + salary;
    }
}

public class Super_keyword_1 {
    public static void main(String[] args) {
        Employee1 obj = new Employee1(4, "Laxman", 75521.65f);
        System.out.println(obj);
    }
}
