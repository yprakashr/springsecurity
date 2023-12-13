package com.lamda_expressions;

interface myIface2 {
    void add(int num1, int num2);
}

public class lambdaExpression_two_params {
    public static void main(String[] args) {
        myIface2 obj2 = (a, b) -> System.out.println(a + b);
        obj2.add(2, 5);

        // ---------------------------------------------
        myIface2 obj3 = new myIface2() {
            public void add(int num1, int num2) {
                System.out.println(num1 + num2);
            };
        };

        obj3.add(0, 0);
    }
}
