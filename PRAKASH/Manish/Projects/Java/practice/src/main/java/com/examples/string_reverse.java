package com.examples;

public class string_reverse {
    public static void main(String[] args) {
        String s1 = "manish";
        String s2 = "";
        for (int i = s1.length() - 1; i >= 0; i--) {
            s2 += s1.charAt(i);
        }
        System.out.println(s2);
    }
}
