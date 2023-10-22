package com.app.backend.Controller;

import com.app.backend.Entity.Product;
import com.app.backend.Entity.User;
import com.app.backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from http://localhost:4200
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/saveProduct")
    public Product saveProduct(@RequestBody Product product) {
        System.out.println("Title:"+product.getTitle());
        return productService.saveProduct(product);
    }

    @GetMapping("")
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("{productId}")
    public Product getProductByID(@PathVariable int productId) {
        return productService.getProductByID(productId);
    }

    @GetMapping("/seller/{sellerID}")
    public List<Product> getProductBySellerID(@PathVariable int sellerID){
        return productService.getProductsBySellerID(sellerID);
    }

}
