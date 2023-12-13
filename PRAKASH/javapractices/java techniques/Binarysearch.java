package javatechniques;

public class Binarysearch {
int a[]= {1,2,3,4,5,6,7,8,9,10};//should be in sorted order
boolean flag=false;
int key=5;
int l=0;
int h=a.length-1;
void meht1() {
while(l<=h) {
	int n=(l+h)/2;
	if(a[n]==key) {
		System.out.println("element found.."+a[n]);
		flag=true;
		break;
	}
if(a[n]<key) {
	l=n+1;
}
if(a[n]>key) {
	h=n-1;
}
}
}



	public static void main(String[] args) {
		Binarysearch b=new Binarysearch();
		b.meht1();

	}

}
