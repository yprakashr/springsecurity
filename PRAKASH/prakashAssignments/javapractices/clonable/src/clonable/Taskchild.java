package clonable;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class Taskchild {
	
	void meth1() {
		
		List li=new ArrayList();
		Task t=new Task("prakash",26,50000.00);
		Task t1=new Task("manish",22,50000.00);
		Task t2=new Task("sireesha",30,50000.00);
		Task t3=new Task("praful",29,50000.00);
		Task t4=new Task("vikram",20,50000.00);
		Task t5=new Task("sony",22,50000.00);

		li.add(t);
		li.add(t1);
		li.add(t2);
		li.add(t3);
		li.add(t4);
		li.add(t5);
		 Collections.sort(li);
		Iterator<Task> i=li.iterator();
		while(i.hasNext()) {
			System.out.println(i.next());
		}
	}
	public static void main(String[] args) {
		new Taskchild().meth1();
	
	}

	
}
