package com.collections.maps.treemaps;

import java.util.TreeMap;

@SuppressWarnings("all")
public class TreeMap1 {
    public static void main(String[] args) {
        TreeMap tm = new TreeMap();
        tm.put(2, "Apple");
        tm.put(4, "Grapes");
        tm.put(1, "Mango");
        tm.put(3, "Banana");
        tm.put(5, "Banana");
        tm.put(6, 2.56f);

        System.out.println(tm);
    }
}
