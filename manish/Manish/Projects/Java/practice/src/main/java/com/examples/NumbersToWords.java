/* program to print given number to word using loop and switch cases */

package com.examples;

import java.util.Scanner;

@SuppressWarnings("all")
public class NumbersToWords {
    public static void main(String[] args) {
        meth();
    }

    static void meth() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number: ");
        int number = sc.nextInt();
        // converting integer to string
        String numString = String.valueOf(number);

        // converting string to character array
        char[] numArray = numString.toCharArray();

        // looping the character array
        for (int i = 0; i < numArray.length; i++) {

            // switch cases for each index of chracter array
            switch (numArray[i]) {

                case '1':
                    System.out.print("one ");
                    break;
                case '2':
                    System.out.print("two ");
                    break;
                case '3':
                    System.out.print("three ");
                    break;
                case '4':
                    System.out.print("four ");
                    break;
                case '5':
                    System.out.print("five ");
                    break;
                case '6':
                    System.out.print("six ");
                    break;
                case '7':
                    System.out.print("seven ");
                    break;
                case '8':
                    System.out.print("eight ");
                    break;
                case '9':
                    System.out.print("nine ");
                    break;
                default:
                    System.out.print("zero ");
                    break;
            }
        }
    }
}
