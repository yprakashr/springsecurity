package com.my_methods;

public class typeOf {
    public static Object typeof(Object obj) {
        return ((Object) obj).getClass().getSimpleName();
    }
}
