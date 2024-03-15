package org.jsp.ecommerceapp.controller;

import java.util.List;

import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.jsp.ecommerceapp.model.Product;
import org.jsp.ecommerceapp.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	@Autowired
	private ProductService productService;

	@PostMapping("/{merchant_id}")
	public ResponseEntity<ResponseStructure<Product>> saveProduct(@RequestBody Product product,
			@PathVariable int merchant_id) {
		return productService.saveProduct(product, merchant_id);
	}

	@PutMapping
	public ResponseEntity<ResponseStructure<Product>> updateProduct(@RequestBody Product product) {
		return productService.updateProduct(product);
	}

	@GetMapping("/{product_id}")
	public ResponseEntity<ResponseStructure<Product>> findById(@PathVariable int product_id) {
		return productService.fingById(product_id);
	}

	@GetMapping("/find-by-brand/{brand}")
	public ResponseEntity<ResponseStructure<List<Product>>> findByBrand(@PathVariable String brand) {
		return productService.findByBrand(brand);
	}

	@GetMapping("/find-by-category/{category}")
	public ResponseEntity<ResponseStructure<List<Product>>> findByCategory(@PathVariable String category) {
		return productService.findByCategory(category);
	}

	@PostMapping("/find-by-merchant_id/{merchant_id}")
	public ResponseEntity<ResponseStructure<List<Product>>> findByMerchantId(@RequestParam int merchant_id) {
		return productService.findByMerchantId(merchant_id);
	}

	@GetMapping
	public ResponseEntity<ResponseStructure<List<Product>>> findAll() {
		return productService.findAll();

	}

}
