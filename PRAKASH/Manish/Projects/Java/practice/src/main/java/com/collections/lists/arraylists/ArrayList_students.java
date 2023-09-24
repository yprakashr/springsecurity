package com.collections.lists.arraylists;

import java.util.ArrayList;
import java.util.Iterator;

@SuppressWarnings("all")
public class ArrayList_students {
    public static void main(String[] args) {

        Students s1 = new Students(1, "Manish", 99.00f);
        Students s2 = new Students(2, "Varun", 95.26f);
        Students s3 = new Students(3, "Shravan", 85.15f);
        ArrayList<Students> al = new ArrayList<Students>();
        al.add(s1);
        al.add(s2);
        al.add(s3);

        Iterator itr = al.iterator();
        while (itr.hasNext()) {
            Students st = (Students) itr.next();
            System.out.println(st.id + " : " + st.name + " : " + st.marks);
        }
    }
}
