package core_java;

 class  parent{
void msg() {
	System.out.println("hi friends");
}
}
class Anonymous{
	void msg() {
	System.out.println("hi friends");
}
	public static void main(String[] args) {
		parent p1=new parent();
		p1.msg();
	
		Anonymous p2=new Anonymous();

	p2.msg();
	}
	
}

