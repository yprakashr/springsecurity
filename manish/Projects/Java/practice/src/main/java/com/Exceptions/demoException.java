package com.exceptions;

public class demoException {
    public static void main(String[] args) {
        String name = "Manish";
        try {
            System.out.println(name.charAt(10));
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            System.out.println("----program completed----");
        }

    }

}