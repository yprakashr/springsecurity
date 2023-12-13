package com.collections.sets.hashsets;

import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("all")
public class Hashsets1 {
    public static void main(String[] args) {
        Set<String> h= new HashSet<String>();
        HashSet hs = new HashSet();
        hs.add(2);
        hs.add(542);
        hs.add(23);
        hs.add(123);
        hs.add(823);
        hs.add(null); // null value allowed
        hs.add("efa"); // heterogeneous
        hs.add(642);
        hs.add(752);
        hs.add(752); // duplicates not allowed

        System.out.println(hs);
    }
}
