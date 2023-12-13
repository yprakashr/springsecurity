package com.my_methods;

public class binarySearch {
    public static int Binarysearch(int[] arr, int key) {
        int pos = -1;
        int left = 0;
        int right = arr.length - 1;
        boolean flag = false;
        bubbleSort.sort(arr);
        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == key) {
                pos = mid;
                flag = true;
                break;
            } else if (arr[mid] > key) {
                right = mid - 1;
            } else {
                left = mid + 1;
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
}
