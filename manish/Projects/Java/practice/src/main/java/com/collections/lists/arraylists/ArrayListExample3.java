package com.collections.lists.arraylists;

import java.util.ArrayList;

public class ArrayListExample3 {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("Mango");
        al.add("Banana");
        al.add("Grapes");
        al.add("Apple");

        for (String li : al) {
            System.out.println(li);
        }
    }
}
