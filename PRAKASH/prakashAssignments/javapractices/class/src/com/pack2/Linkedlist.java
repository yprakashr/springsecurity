package com.pack2;

import java.util.*;
class Stu {
	int rollno;
	 Stu(int rollno){
		this.rollno=rollno;
	}
	public String toString() {
		return "  "+rollno;
	}
}
public class Linkedlist {
public static void main(String[] args) {
	LinkedList<Stu> ll=new LinkedList<>();
//	System.out.println(ll.capacity());
	ll.add(new Stu(34));
	Stu s2=new Stu(25);
	ll.add(s2);

	Iterator it=ll.iterator();
	while(it.hasNext()) {
		System.out.println(it.next());
	}
	
	
}}

