package com.app.backend.Controller;

import com.app.backend.Entity.Product;
import com.app.backend.Entity.User;
import com.app.backend.Repository.ProductRepository;
import com.app.backend.Service.ProductService;
import org.springframework.beans.BeanUtils;
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

    // Add Product
    @PostMapping("/saveProduct")
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    // Ger all the Products
    @GetMapping("")
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    // Get Product by productID
    @GetMapping("{productId}")
    public Product getProductByID(@PathVariable int productId) {
        return productService.getProductByID(productId);
    }

    // Get List of Products by sellerID
    @GetMapping("/seller/{sellerID}")
    public List<Product> getProductBySellerID(@PathVariable int sellerID){
        return productService.getProductsBySellerID(sellerID);
    }

    // Delete Product
    @DeleteMapping("{productID}")
    public void deleteProductByProductID(@PathVariable int productID){
        productService.deleteProductByID(productID);
    }

    // Update or Edit Product Details
//    @PutMapping("{productID}")
//    public Product updateProduct(@PathVariable int productID, @RequestBody Product product) {
//        Product updateProduct = productService.getProductByID(productID);
//        updateProduct.setCategory(product.getCategory());
//        updateProduct.setPrice(product.getPrice());
//        updateProduct.setStatus(product.getStatus());
//        updateProduct.setDescription(product.getDescription());
//        updateProduct.setBuyerID(product.getBuyerID());
//        updateProduct.setTitle(product.getTitle());
//
//        productService.saveProduct(updateProduct);
//
//        return product;
//    }

    @PutMapping("{productID}")
    public Product updateProduct(@PathVariable int productID, @RequestBody Product product) {
        Product updateProduct = productService.getProductByID(productID);
        BeanUtils.copyProperties(product, updateProduct, "id"); // Exclude copying 'id' property
        productService.saveProduct(updateProduct);

        return updateProduct;
    }

    @GetMapping("{buyerID}/{status}")
    public List<Product> getProductsByStatusAndUserId(@PathVariable int buyerID, @PathVariable int status){
        return productService.fetchProductByBuyerIDAndStatus(buyerID,status);
    }
}
