package javatechniques;

import java.util.Arrays;

public class Bubblesort {
public static void main(String[] args) {
	int a[]= {1,653,1,46,153,136,16,561,6};
System.out.println("Array before sorting"+Arrays.toString(a));
int temp = 0;
for(int i=0;i<a.length;i++) {
	for(int j=0;j<a.length-1;j++) {
		if(a[j]>a[j+1]) {
			temp=a[j];
			a[j]=a[j+1];
			a[j+1]=temp;
			
		}
	}
}
System.out.println("Array after sorting"+Arrays.toString(a));






}
}
