package com.collections.lists.arraylists;

import java.util.ArrayList;
import java.util.Iterator;

@SuppressWarnings("all")
public class ArrayList_methods {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("Mango");
        al.add("Banana");
        al.add("Grapes");
        al.add("Apple");
        System.out.println(al);
        System.out.println("is al empty; " + al.isEmpty());
        System.out.println("al size: " + al.size());
        al.clear();
        System.out.println(al);
        System.out.println("is al empty; " + al.isEmpty());
        System.out.println("al size: " + al.size());

        ArrayList<String> al3 = new ArrayList<String>();
        al3.add("Ravi");
        al3.add("Vijay");
        al3.add("Ajay");
        ArrayList<String> al2 = new ArrayList<String>();
        al2.add("Ravi");
        al2.add("Hanumat");
        al2.add("Ajay");
        al3.retainAll(al2);
        System.out.println("iterating the elements after retaining the elements of al2");
        Iterator itr = al3.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

    }
}
