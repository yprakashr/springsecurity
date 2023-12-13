package com.pack2;

import java.util.Scanner;

public class Bubblesort {
	public static void main(String[] args) {
		
	
Scanner input=new Scanner(System.in);
int num=input.nextInt();

int array[]=new int[num];
System.out.println("Enter"+num+"integers");

for(int i=0;i<num;i++) {
	array[i]=input.nextInt();
}

for(int i=0;i<num;i++) {
	for(int j=0;j<num-1;j++) {
		if(array[j]>array[j+1]) {
			int temp=array[j];
			array[j]=array[j+1];
			array[j+1]=temp;
		}
	}
}
System.out.println("Sorted List ");
for(int i=0; i<num; i++) {
System.out. print (array [i]+" ");
}
}}
