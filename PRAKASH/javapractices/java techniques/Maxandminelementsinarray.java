package javatechniques;

public class Maxandminelementsinarray {
int a[]= {21,65,16,651,3,85,6,1};
	void maxandmin() {
	int max =a[0];
	int min =a[0];
	for(int i=0;i<a.length;i++) {
		if(a[i]>max){
		max=a[i];
	}
		if(a[i]<max) {
			min=a[i];	
		}
		}
	System.out.println(max);
	System.out.println(min);
}
	
	public static void main(String[] args) {
		Maxandminelementsinarray ma=new Maxandminelementsinarray();
		ma.maxandmin();
}
}
