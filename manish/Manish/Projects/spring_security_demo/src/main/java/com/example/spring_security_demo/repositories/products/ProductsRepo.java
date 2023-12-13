package com.example.spring_security_demo.repositories.products;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring_security_demo.entities.products.products;

public interface ProductsRepo extends JpaRepository<products, Integer> {

}
