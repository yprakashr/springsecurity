package com.enums;

enum MyEnum {
    enum1 {
        public int getVal() {
            return 20;
        }
    },
    enum2 {
        public int getVal() {
            return 120;
        }
    },
    enum3 {
        public int getVal() {
            return 220;
        }
    };

    public abstract int getVal();

    public static void main(String[] args) {
        for (MyEnum enums : MyEnum.values()) {
            String name = enums.name();
            int days = enums.getVal();
            int index = enums.ordinal();

            System.out.println(name + " : " + days + " : " + index);
        }
    }
}
