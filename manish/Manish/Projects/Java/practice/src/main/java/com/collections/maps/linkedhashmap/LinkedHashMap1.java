package com.collections.maps.linkedhashmap;

import java.util.LinkedHashMap;

@SuppressWarnings("all")
public class LinkedHashMap1 {
    public static void main(String[] args) {
        LinkedHashMap hm = new LinkedHashMap();
        hm.put(2, "Apple");
        hm.put(4, "Grapes");
        hm.put(1, "Mango");
        hm.put(3, "Banana");
        hm.put(5, "Banana");
        hm.put(null, null);
        hm.put(null, null);
        hm.put(6, null);
        hm.put("fdwe", 50.26f);

        System.out.println(hm.get(3));
    }
}
