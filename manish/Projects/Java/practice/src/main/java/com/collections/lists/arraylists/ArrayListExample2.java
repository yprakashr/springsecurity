package com.collections.lists.arraylists;

import java.util.ArrayList;
import java.util.Iterator;

@SuppressWarnings("all")
public class ArrayListExample2 {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("Mango");
        al.add("Banana");
        al.add("Grapes");
        al.add("Apple");

        Iterator itr = al.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }
    }
}
