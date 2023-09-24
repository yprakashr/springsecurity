package com.collections.lists.arraylists;

import java.util.ArrayList;

public class ArrayList_add {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("Mango");
        al.add("Banana");
        al.add("Grapes");
        al.add("Apple");
        System.out.println(al);

        ArrayList<String> al1 = new ArrayList<String>();
        al1.addAll(al);
        System.out.println(al1);

        ArrayList<String> al2 = new ArrayList<String>();
        al2.add("Ram");
        al2.add("Sita");
        al2.add("Hanuma");
        al2.addAll(0, al1);
        System.out.println(al2);

    }
}
