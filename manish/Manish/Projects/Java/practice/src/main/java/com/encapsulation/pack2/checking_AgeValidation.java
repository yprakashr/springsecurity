package com.encapsulation.pack2;

import com.encapsulation.pack1.default_AgeValidate;
import com.encapsulation.pack1.private_AgeValidate;
import com.encapsulation.pack1.protected_AgeValidate;
import com.encapsulation.pack1.public_AgeValidate;

class subPackage_checkingAgeValidation_public extends protected_AgeValidate {
    void meth(int age) {

        // accessing PROTECTED method in other package sub-class
        protected_AgeValidate.validate(15);
    }
}

class subPackage_checkingAgeValidation_protected extends protected_AgeValidate {
    void meth(int age) {

        // accessing PUBLIC method in other package sub-class
        public_AgeValidate.validate(age);
    }
}

class subPackage_checkingAgeValidation_default extends default_AgeValidate {
    void meth(int age) {

        // accessing DEFAULT method in other package sub-class
        // default_AgeValidate.validate(18); // ERROR

    }
}

class subPackage_checkingAgeValidation_private extends private_AgeValidate {
    void meth(int age) {

        // accessing PRIVATE method in same package class
        // private_AgeValidate.validate(18); //ERROR

    }
}

public class checking_AgeValidation {
    public static void main(String[] args) {

        // accessing PUBLIC method in other package class
        public_AgeValidate.validate(15);

        // accessing PROTECTED method in other package class
        // protected_AgeValidate.validate(15); //ERROR

        // accessing DEFAULT method in same package class
        // default_AgeValidate.validate(18); // ERROR

        // accessing PRIVATE method in same package class
        // private_AgeValidate.validate(18); //ERROR
    }
}
