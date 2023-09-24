package com.lamda_expressions;

interface myIface3 {
    void length(String str);
}

public class lambdaExpression_1_params {
    public static void main(String[] args) {
        myIface3 obj3 = name -> System.out.println(name.length());
        obj3.length("afafa");
    }
}
