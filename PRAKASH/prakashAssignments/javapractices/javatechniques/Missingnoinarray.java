package javatechniques;

public class Missingnoinarray {

int	a[]= {1,2,3,4,5,6,7};
	void checkmissing() {
		int sum=0;
		int loopsum=0;
		for(int i=0;i<a.length;i++) {
			sum=sum+a[i];
			
		}
		System.out.println(sum);
		for(int i=1;i<=7;i++) {
			loopsum=loopsum+i;
		}
		System.out.println(loopsum);
	}
	
	public static void main(String[] args) {
		Missingnoinarray miss=new Missingnoinarray();
		miss.checkmissing();
		
}
}
