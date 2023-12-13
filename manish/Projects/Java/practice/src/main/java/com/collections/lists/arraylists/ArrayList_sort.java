package com.collections.lists.arraylists;

import java.util.ArrayList;
import java.util.Collections;

public class ArrayList_sort {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("Mango");
        al.add("Banana");
        al.add("Grapes");
        al.add("Apple");

        Collections.sort(al);
        System.out.println(al);
    }
}
