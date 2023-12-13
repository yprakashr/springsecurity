package com.pack2;

import java.util.*;

public class Hashmap {
	public static void main(String[] args) {
		

	HashMap hm= new HashMap();
	hm.put("name", "Abhishek");
	hm.put("dob", "20thJan") ;
	hm.put("nickname", "Abhishek") ;
	Set s=hm. keySet();
	Iterator it= s.iterator();
	while(it.hasNext ()) {
	Object obj=it.next();
//	String str = (String) obj;
	System.out.println (obj+": "+hm.get(obj));
}	}
}