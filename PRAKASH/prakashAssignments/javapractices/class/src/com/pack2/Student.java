package com.pack2;

//import java.util.ArrayList;
import java.util.*;

class Coll {

	
	int rollno;
	String name,address;
	
	Coll(int rollno,String name,String address){
		this.name=name;
		this.rollno=rollno;
		this.address=address;
		
	}
}	 
	  class Student{
		 public static void main(String[] args) {

			 ArrayList<Coll>	list=new ArrayList<>();
	Coll s1=new Coll(1,"prakash","hyd");
	Coll s2=new Coll(1,"prakash","hyd");
	Coll s3=new Coll(1,"prakash","hyd");		
	Coll s4=new Coll(1,"prakash","hyd");		
		 
	list.add(s1);
	list.add(s2);
	list.add(s3);
	list.add(s4);
	for(Coll s:list) {
		System.out.println(s.rollno+" "+s.name+" "+s.address);;
	}
	
		 }
	 }
	 
	

