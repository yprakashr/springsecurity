package core_java;

class Staticinnerclass {
static class Inner{
	void innermethod() {
		System.out.println("inner method");
	}
public static void main(String[] args) {
	Inner i=new Inner();
	i.innermethod();
}}}



