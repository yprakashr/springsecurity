package com.collections.sets.linkedHashSets;

import java.util.LinkedHashSet;

@SuppressWarnings("all")
public class LinkedhashSets1 {
    public static void main(String[] args) {
        LinkedHashSet lhs = new LinkedHashSet<>();

        lhs.add(2);
        lhs.add(542);
        lhs.add(23);
        lhs.add(123);
        lhs.add(823);
        lhs.add(null); // null value allowed
        lhs.add("efa"); // heterogeneous
        lhs.add(642);
        lhs.add(752);
        lhs.add(752); // duplicates not allowed

        System.out.println(lhs);
    }
}
