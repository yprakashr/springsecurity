package com.collections.lists.arraylists;

import java.util.ArrayList;

public class ArrayListExample1 {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("Mango");
        al.add("Banana");
        al.add("Grapes");
        al.add("Apple");

        // System.out.println(al);

        for (int i = 0; i < al.size(); i++) {
            System.out.println(al.get(i));
        }
    }
}
