package com.example.spring_security_demo.service_Impl.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring_security_demo.entities.products.products;
import com.example.spring_security_demo.repositories.products.ProductsRepo;
import com.example.spring_security_demo.services.products.ProductService;

@Service
public class products_impl implements ProductService {

    @Autowired
    private ProductsRepo productsRepo;

    @Override
    public List<products> getAllProducts() {
        return productsRepo.findAll();
    }

    @Override
    public products getProductByID(int id) {
        return productsRepo.findById(id).get();
    }

}
