package com.example.spring_security_demo.services.products;

import com.example.spring_security_demo.entities.products.products;
import java.util.List;

public interface ProductService {

    public List<products> getAllProducts();

    public products getProductByID(int id);
}
