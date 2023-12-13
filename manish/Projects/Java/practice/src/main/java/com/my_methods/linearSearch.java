package com.my_methods;

public class linearSearch {
    public static int search(int[] arr, int key) {
        int pos = -1;
        boolean flag = false;
        for (int i = 0; i < arr.length; i++) {
            if (key == arr[i]) {
                pos = i;
                flag = true;
                break;
            }
        }
        if (flag) {
            System.out.println(key + " is present at " + pos + "th index");
            return pos;
        } else {
            System.out.println(key + " is not present");
            return pos;
        }
    }

    public static void main(String[] args) {
        int arr[] = { 95,12,64,75,30,28,43 };
        search(arr, 265);
    }
}
