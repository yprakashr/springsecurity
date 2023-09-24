package com.example.spring_security_demo.controllers.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.spring_security_demo.entities.products.products;
import com.example.spring_security_demo.services.products.ProductService;
import java.util.List;

@RestController
@RequestMapping("products")
public class Products_Controller {

    @Autowired
    private ProductService productService;

    @GetMapping("welcome")
    public String welcome() {
        return "Welcome to products";
    }

    @GetMapping("all")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<products> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public products getAllProducts(@PathVariable("id") int id) {
        return productService.getProductByID(id);
    }
}
