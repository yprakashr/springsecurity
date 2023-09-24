package javatechniques;

import java.util.HashSet;

public class Duplicateelementsinarray {
	int a[] = { 3, 63, 1, 66, 13, 6416, 616, 16, 1, 66 };
	String b[] = { "java", "c++", "python", "java" };

	void numberduplicate() {
		boolean flag = false;
		for (int i = 0; i < a.length; i++) {
			for (int j = i + 1; j < a.length; j++) {
				if (a[i] == a[j]) {
					System.out.println("found duplicate array element :" + a[i]);
					flag = true;
				}
			}
		}
		if (flag == true) {
			System.out.println("found duplicate array element");
		}
	}

	void stringduplicate() {
		boolean flag = false;
		for (int i = 0; i < b.length; i++) {
			for (int j = i + 1; j < b.length; j++) {
				if(b[i] == b[j]) {
					System.out.println("found duplicate array String element :" + b[i]);
					flag = true;
				}
			}
		}
		if (flag == true) {
			System.out.println("found duplicate array String element");
		}
	}

	void hasetmethod() {
HashSet<String> langs=new HashSet();
boolean flag=true;
//System.out.println(langs.add("java"));
//System.out.println(langs.add("java"));
//System.out.println(langs.add("java"));
//System.out.println(langs.add("java"));
//System.out.println(langs.add("java"));
for(String l:b) {
	System.out.println("found duplicate element :"+l);
	flag=true;
}
String l = null;
//String lan;
if (langs.add(l)==false) {
	System.out.println("found duplicate array String element");
flag=false;
}
	}

	public static void main(String[] args) {
		Duplicateelementsinarray du = new Duplicateelementsinarray();
//		du.numberduplicate();
//		du.stringduplicate();
		du.hasetmethod();
	}
}
