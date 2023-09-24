package com.oops;

class Person {
    int age;
    float weight;

    public Person(int age, float weight) {
        this.age = age;
        this.weight = weight;
    }

    void disp() {
        System.out.println("age: " + this.age);
        System.out.println("weight: " + this.weight);
    }
}

class Employee extends Person {

    String empName;
    int empId;

    public Employee(int age, float weight, String name, int id) {
        super(age, weight);
        empName = name;
        empId = id;
    }

    @Override // method overriding
    void disp() {
        super.disp();
        System.out.println("Emp name: " + this.empName);
        System.out.println("Emp id: " + this.empId);
    }
}

public class super_keyword {
    public static void main(String[] args) {
        Person per = new Person(45, 65);
        per.disp();

        System.out.println("---------------------------");

        Employee emp = new Employee(23, 50, "Manish", 15);
        emp.disp();
    }
}
