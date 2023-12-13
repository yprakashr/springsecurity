package com.my_methods;

public class bubbleSort {
    // method to bubble sorting list
    public static void sort(int arr[]) {
        int temp;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {

                // comparing consequent elements of list
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int arr[] = { 56, 12, 28, 34, 97, 76, 9, 64, 48, 53 };
        sort(arr);
        for (int i : arr) {
            System.out.print(i + ", ");
        }
    }
}
