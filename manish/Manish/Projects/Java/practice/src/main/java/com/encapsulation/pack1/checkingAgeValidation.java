package com.encapsulation.pack1;

class sub_checkingAgeValidation_public extends public_AgeValidate {
    void meth(int age) {

        // accessing PUBLIC method in same package sub-class
        public_AgeValidate.validate(age);
    }
}

class sub_checkingAgeValidation_protected extends protected_AgeValidate {
    void meth(int age) {

        // accessing PROTECTED method in same package sub-class
        protected_AgeValidate.validate(15);
    }
}

class sub_checkingAgeValidation_default extends default_AgeValidate {
    void meth(int age) {

        // accessing DEFAULT method in same package sub-class
        default_AgeValidate.validate(15);
    }
}

class sub_checkingAgeValidation_private extends private_AgeValidate {
    void meth(int age) {

        // accessing PRIVATE method in same package sub-class
        // private_AgeValidate.validate(18); //ERROR
    }
}

public class checkingAgeValidation {
    public static void main(String[] args) {

        // accessing PUBLIC method in same package class
        public_AgeValidate.validate(20);

        // accessing PROTECTED method in same package class
        protected_AgeValidate.validate(15);

        // accessing DEFAULT method in same package class
        default_AgeValidate.validate(18);

        // accessing PRIVATE method in same package class
        // private_AgeValidate.validate(18); //ERROR
    }
}
