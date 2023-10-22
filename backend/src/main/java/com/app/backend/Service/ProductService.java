package com.app.backend.Service;

import com.app.backend.Entity.Product;
import com.app.backend.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductByID(int productId) {
        return productRepository.findById(productId).orElse(null);
    }

    public List<Product> getProductsBySellerID(int sellerID){
        return productRepository.findBySellerID(sellerID);
    }

    public void deleteProductByID(int productID){
        productRepository.deleteById(productID);
    }

}

