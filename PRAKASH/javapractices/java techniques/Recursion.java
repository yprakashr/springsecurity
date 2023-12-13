package javatechniques;

public class Recursion {
public int fact(int n) {
	if(n==1) 
		return 1;
		int x=n*fact(n-1);
		return x;

}
	public static void main(String[] args) {
		Recursion r=new Recursion();
		r.fact(5);

	}

}
