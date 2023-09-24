package com.pack2;

import java.util.*;

public class Hashset {
public static void main(String[] args) {
	//printing in random order
	HashSet hs=new HashSet();
	hs.add("Abhishek");
	hs.add("Vasantha");
	hs.add("Vasantha");
	hs.add("prakash");
	hs.add("hero");
	hs.add("suneel");
	hs.add("manish");
	hs.add("sravani");
	Iterator i=hs.iterator();
	while(i.hasNext()) {
		System.out.println(i.next());
	}
	
}
}
