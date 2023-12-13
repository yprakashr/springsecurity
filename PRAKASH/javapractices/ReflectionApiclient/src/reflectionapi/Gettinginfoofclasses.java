package reflectionapi;

import java.lang.reflect.Constructor;
import java.util.Arrays;

public class Gettinginfoofclasses {

	private int i=2;
	private String s="prakash";
	private int j=23;
	
	Gettinginfoofclasses(){
		System.out.println("this is the default parameters");
	}
	
	Gettinginfoofclasses(int i,int j){
		System.out.println("this is parameterized constructor");
	}
	void meth1() {
		System.out.println("this is meth1");
	}
	void meth2() {
		System.out.println("this is meth2");
	}
	
}
