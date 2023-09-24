package com.examples;

import java.util.Scanner;

@SuppressWarnings("all")
public class arrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 1D array
        System.out.println("======1D Array=====");
        int arr[] = new int[4];
        for (int i = 0; i < arr.length; i++) {
            System.out.print("Enter arr[" + i + "] element: ");
            arr[i] = sc.nextInt();
        }

        System.out.print("Entered array is: ");
        for (int i : arr) {
            System.out.print(i + " , ");
        }

        // 2D array
        System.out.println();
        System.out.println("======2D Array=====");
        int arr1[][] = new int[1][3];
        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr1[i].length; j++) {
                System.out.print("Enter arr[" + i + "]" + "[" + j + "]" + " element: ");
                arr1[i][j] = sc.nextInt();
            }
        }

        System.out.println("Entered array is: ");
        for (int[] i : arr1) {
            for (int j : i) {
                System.out.print(j + " , ");
            }
            System.out.println();
        }
    }
}
