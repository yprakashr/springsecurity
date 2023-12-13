package com.type_conversion;

import com.my_methods.typeOf;

public class int_to_string {
    public static void main(String[] args) {
        int num = 3;
        String str = String.valueOf(num);
        System.out.println(str);
        System.out.println(typeOf.typeof(str));
    }
}
