package com.collections.maps.hashtable;

import java.util.Hashtable;

@SuppressWarnings("all")
public class HashTable1 {
    public static void main(String[] args) {
        Hashtable ht = new Hashtable();
        ht.put(2, "Apple");
        ht.put(4, "Grapes");
        ht.put(1, "Mango");
        ht.put(3, "Banana");
        ht.put(5, "grr");
        ht.put(5, "eaed");
        ht.put(6, "eaed");
        ht.put("fdwe", 50.26f);
        // ht.put("fes", null);

        System.out.println(ht);
    }
}
