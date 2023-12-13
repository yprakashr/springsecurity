package com.collections.maps.hashmap;

import java.util.HashMap;

@SuppressWarnings("all")
public class HashMap1 {
    public static void main(String[] args) {
        HashMap hm = new HashMap();
        hm.put(1, "Mango");
        hm.put(1, "Mango");
        hm.put(2, "Apple");
        hm.put(3, "Banana");
        hm.put(4, "Grapes");
        hm.put(5, null);
        hm.put(6, null);
        hm.put(6, "sam");
        hm.put(null, null);
        hm.put("fdwe", 50.26f);

        System.out.println(hm);
    }
}