package br.com.farmacristo.controller;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.farmacristo.model.DTO.product.NewProductDTO;
import br.com.farmacristo.model.entity.Product;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.service.ProductService;

@RestController
@CrossOrigin("*")
@RequestMapping(path="/api/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping
	public ResponseEntity<List<Product>> findAll() {
		return ResponseEntity.ok().body(this.productService.findAll());
	}
	
	@GetMapping("/{productId}")
	public ResponseEntity<Product> findById(@PathVariable(name="productId") UUID id) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.productService.findById(id));
	}
	
	@GetMapping("/name-like/{name}")
	public ResponseEntity<List<Product>> findByNameLike(@PathVariable(name="name") String name) {
		return ResponseEntity.ok().body(this.productService.findByNameLike(name));
	}
	
	@GetMapping("/image/{productId}")
	public ResponseEntity<ByteArrayResource> findProductImageById(@PathVariable(name="productId") UUID id) throws FarmaCristoException {
		Product product = this.productService.findById(id);
		
		HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
	
        ByteArrayResource image= new ByteArrayResource(product.getImageBytes());
        
		return ResponseEntity
				.ok()
					.headers(headers)
					.contentLength(product.getImageBytes().length)
					.body(image);
	}
	
	@PostMapping
	public ResponseEntity<Void> save(@RequestBody NewProductDTO newProductDTO) throws FarmaCristoException {
		this.productService.save(newProductDTO);
		return ResponseEntity.status(201).build();
	}
	
	@PutMapping("/{productId}")
	public ResponseEntity<Void> update(@PathVariable(name="productId") UUID id, @RequestBody NewProductDTO updatedProduct) throws FarmaCristoException {
		this.productService.update(id, updatedProduct);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/image/{productId}")
	public ResponseEntity<Void> updateProductImageById(@PathVariable(name="productId") UUID id, @RequestPart(name="image") MultipartFile file) throws IOException, FarmaCristoException {
		this.productService.updateImage(id, file.getBytes());
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/{productId}")
	public ResponseEntity<Void> delete(@PathVariable(name="productId") UUID id) throws FarmaCristoException {
		this.productService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
