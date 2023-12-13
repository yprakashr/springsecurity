package com.collections.lists.arraylists;

import java.util.ArrayList;

public class ArrayList_remove {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("Mango");
        al.add("Banana");
        al.add("Grapes");
        al.add("Apple");
        al.add("Apple1");
        al.add("Apple2");
        al.add("Apple3");
        al.add("Apple4");

        System.out.println("al: " + al);

        al.remove(3);
        System.out.println("al after removing 3rd index: " + al);

        al.removeAll(al);
        System.out.println("al after removeAll: " + al);

        al.add("Apple1");
        al.add("Apple2");
        al.add("Apple3");
        al.add("Apple4");

        ArrayList<String> al1 = new ArrayList<String>();
        al1.add("Apple9");
        al1.add("Apple6");
        al1.addAll(al);
        System.out.println("al1: " + al1);
        al1.removeAll(al);
        System.out.println("al1 after removing al : " + al1);

    }
}
