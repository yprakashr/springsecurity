package com.lamda_expressions;

interface myIface1 {
    void disp();
}

public class lambdaExpression_no_params {
    public static void main(String[] args) {
        myIface1 obj1 = () -> System.out.println("this is disp()");
        obj1.disp();
    }
}
