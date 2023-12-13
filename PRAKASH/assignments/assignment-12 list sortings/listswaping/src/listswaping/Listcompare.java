package listswaping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Listcompare {
	void meth1(List<Integer> l1, List<Integer> l2) {
		List<Integer> l3 = new ArrayList<Integer>();
//	
//		l1.add(1);l1.add(2);l1.add(8);l1.add(3);l1.add(9);l1.add(10);
//		l2.add(8);l2.add(9);l2.add(6);l2.add(3);l2.add(10);	l2.add(11);l2.add(12);

		l1.stream().sorted().collect(Collectors.toList());
		l2.stream().sorted().collect(Collectors.toList());
		for (int i = 0; i < l1.size(); i++) {
			int n = l1.get(i);
			for (int j = 0; j < l2.size(); j++) {
				if (!l2.contains(n)) {
					l3.add(n);
					break;
				}
			}
		}

		System.out.println(l3);

	}

	void meth2(List<Integer> li) {
//		List<Integer> l1 = Arrays.asList(1,2,8,3,9,10);
//		List<Integer> l2 = Arrays.asList(8,96,3,10,11,12);

//		List<Integer> l1 = Arrays.asList(1,2,8,3,9,10);
//		List<Integer> l2 = Arrays.asList(8,9,3,10,11,12);

//		l1.add(1);l1.add(2);l1.add(8);l1.add(3);l1.add(9);l1.add(10);l1.add(5);
//		l2.add(8);l2.add(9);l2.add(6);l2.add(3);l2.add(10);	l2.add(11);l2.add(12);
//		System.out.println(l1.size());
//		for(int n:l1) {
//			if(n)
//		}
		System.out.println("list before swaping   :" + li);
		int tmp;
		for (int i = 0; i < li.size(); i++) {

			for (int j = i + 1; j < li.size(); j++) {
				if (li.get(i) > li.get(j)) {
					tmp = li.get(i);
					li.set(i, li.get(j));
					li.set(j, tmp);

				}

			}
		}

//		for (int i = 0; i < l2.size(); i++) {
//
//		    for (int j = l2.size() - 1; j > i; j--) {
//		        if (l2.get(i) > l2.get(j)) {
//int tmp = 0;
//		        	l2.set(i,l2.get(j));
//		        	l2.set(j,tmp);
//
//
//		    }
//
//		    }}
//		for (int i: l1) {
//		    System.out.println(i);
//		}
//		
//		System.out.println("before swaping  :"+l2);
//		Collections.swap(l2, 0, 1);
//		System.out.println("after swaping  :"+l2);

//		System.out.println("before swaping   :"+l1);
//		for(int i=0;i<l1.size()-1;i++) {
//			for(int j=0;j<l1.size()-1;j++) {
//				if((l1.get(j))>(l1.get(j+1))) {
//					
//					System.out.println((l1.get(j)));
//					int tmp = 0;
//    	l1.set(j,l1.get(j+1));
//    	l1.set(j,tmp);
////				
//				}
//				
//			}
//		}

		System.out.println("after swaping   :" + li);
//		System.out.println("after swaping   :"+l2);

	}

	public static void main(String[] args) {
		List<Integer> l1 = Arrays.asList(1, 2, 8, 3, 9, 10);
		List<Integer> l2 = Arrays.asList(8, 9, 6, 3, 10, 11, 12);

		Listcompare list = new Listcompare();
		list.meth1(l1, l2);
		list.meth2(l1);
		

	}
}
