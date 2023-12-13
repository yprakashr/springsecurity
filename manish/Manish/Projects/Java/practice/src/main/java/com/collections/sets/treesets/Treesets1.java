package com.collections.sets.treesets;

import java.util.TreeSet;

public class Treesets1 {
    public static void main(String[] args) {
        TreeSet<Integer> ts = new TreeSet<Integer>();
        ts.add(521);
        ts.add(568);
        ts.add(523);
        ts.add(525);
        ts.add(525); // duplicates not allowed
        ts.add(528);
        ts.add(527);
        // ts.add(null); // null value not allowed
        // ts.add('s'); // not heterogeneous

        System.out.println(ts);
    }
}
