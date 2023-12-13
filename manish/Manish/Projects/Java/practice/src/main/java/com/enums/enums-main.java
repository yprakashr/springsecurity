package com.enums;

// If you put main() method inside the enum, you can run the enum directly.
enum Cars {
    bmw, benz, opel, suzuki;

    public static void main(String[] args) {
        for (Cars c : Cars.values()) {
            System.out.println(c);
        }
    }
}
