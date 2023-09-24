package com.examples;

import java.util.Random;

import com.my_methods.*;

public class sorting_array {
    public static void main(String[] args) {
        Random ran = new Random();
        int[] arr = new int[10];

        // storing random numbers in arrays
        for (int i = 0; i < arr.length - 1; i++) {
            arr[i] = ran.nextInt(1000);
        }

        // printing stored array
        System.out.print("Entered array is: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " , ");
        }

        System.out.println();
        System.out.println();
        System.out.println();

        // sorting the stored array
        bubbleSort.sort(arr);

        // printing sorted array
        System.out.print("Sorted array is: ");
        for (int k = 0; k < arr.length; k++) {
            System.out.print(arr[k] + " , ");
        }
    }
}
