package com.pack1;

import variables.main;

public class ClassA {
	public void meth1(int a,int b) {
		System.out.println("classA meth1");
	}
	public static void main(String[] args) {
		System.out.println("ClassA method");
		new ClassA().meth1(6,6);
		
	}
}
