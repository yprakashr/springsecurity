package javatechniques;

public class Commandlineaurguments {
	void args(String a[]) {
		int x=Integer.parseInt(a[0]);
		int y=Integer.parseInt(a[1]);
		int z=Integer.parseInt(a[2]);
	}
public static void main(String abc[]) {
	double x=Double.parseDouble(abc[0]);
	float y=Float.parseFloat(abc[1]);
	int z=Integer.parseInt(abc[2]);
	int za=Short.parseShort(abc[2]);
	int xy=Integer.parseInt(abc[2]);
	int zy=Integer.parseInt(abc[2]);
int  a=(int) (x+y+z);
System.out.println(a);

Commandlineaurguments c=new Commandlineaurguments();
c.args(abc);
}
}
