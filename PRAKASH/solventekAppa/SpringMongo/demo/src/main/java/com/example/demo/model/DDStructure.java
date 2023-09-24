package com.example.demo.model;

import java.util.List;

public class DDStructure {

    private List<FormField> FormFields;

    public DDStructure() {
    }

    public DDStructure(List<FormField> formFields) {
        FormFields = formFields;
    }

    public List<FormField> getFormFields() {
        return FormFields;
    }

    public void setFormFields(List<FormField> formFields) {
        FormFields = formFields;
    }
}
