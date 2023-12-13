package variables;

class Testarray3
{
	void Implicitly() {
		byte b=10;
		System.out.println("byte value is"+b);
		short s=b;
		System.out.println("short vaue is"+s);
		s++;
		int i=s++;
		System.out.println("int vlue is "+i);
		System.out.println("short vlaue is "+s);
		long l=i;
		System.out.println("long vlaue is "+(--l));
		float f=l;
		System.out.println("the vlaue of float is"+(f+b));
		double d=(--f);
		System.out.println("value of double is "+d);
		show();
		if(!(d==f)) {
			System.out.println("equal");
		}
		else {
			System.out.println("not equal");
		}
		
	}
public static void main(String args[])
{
	Testarray3 a=new Testarray3();
	a.Implicitly();
}
static void show() {
	char c='A';
	int a=++c;
	System.out.println(a);//66
	Testarray3 obj=new Testarray3();
	String s=obj.meth1();
	System.out.println(s);//implicit casting is done by the compler automatically
}
String meth1() {
	String s="implicit casting is done by the compler automatically";
	return s;
}
}
