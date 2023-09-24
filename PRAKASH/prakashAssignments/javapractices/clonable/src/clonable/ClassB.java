package clonable;

public class ClassB implements Cloneable {
int x=100;
int y=200;
ClassB show() throws CloneNotSupportedException {
	ClassB obj=(ClassB) super.clone();
	return obj;
	
}
}
