package core_java;

public class ClassAB {
void meth1() {
	int i;
	for(i=1;i<6;i++) {
		if(i++>3)
			continue;
	}
	System.out.println(++i);
}
public static void main(String[] args) {
	new ClassAB().meth1();
}
}
