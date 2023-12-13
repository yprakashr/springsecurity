package com.collections.lists.arraylists;

import java.util.ArrayList;

public class ArrayList_get_set {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("Mango");
        al.add("Banana");
        al.add("Grapes");
        al.add("Apple");

        System.out.println(al.get(2));
        al.set(0, "Cherry");
        System.out.println(al);
    }
}
