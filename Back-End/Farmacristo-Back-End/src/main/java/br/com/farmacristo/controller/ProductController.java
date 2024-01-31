package br.com.farmacristo.controller;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import br.com.farmacristo.model.DTO.product.ProductDTO;
import br.com.farmacristo.model.entity.Product;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping(path="/api/products")
@Tag(name="Product", description="Controller class that will handle all requests coming to the URL: \"/api/products\" - that is, it controls everything related to the product.")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@Operation (
		summary="Find all products",
		description="With this method you will be able to search for all existing products in our system. In return for the request, all formatted information will come from the respective products, if it exists." 
	)
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll() throws FarmaCristoException {
		return ResponseEntity.ok().body(this.productService.findAll());
	}
	
	@Operation (
		summary="Find product by id",
		description="With this method you can search for a specific product in our system. In return, all formatted information will come from the respective product, if it exists." 
	)
	@GetMapping("/{productId}")
	public ResponseEntity<ProductDTO> findById(@PathVariable(name="productId") UUID id) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.productService.findById(id));
	}
	
	@Operation (
		summary="Find product image by id",
		description="With this method you can search for a specific image of a product in our system. In return for this request, the image of the product will come, if it exists in our system." 
	)
	@GetMapping("/image/{productId}")
	public ResponseEntity<ByteArrayResource> findProductImageById(@PathVariable(name="productId") UUID id) throws FarmaCristoException {
		Product product = this.productService.findByIdDefault(id);
		
		HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
	
        ByteArrayResource image= new ByteArrayResource(product.getImageBytes());
        
		return ResponseEntity
				.ok()
					.headers(headers)
					.contentLength(product.getImageBytes().length)
					.body(image);
	}
	
	@PreAuthorize("hasRole('Administrator')")
	@Operation (
		summary="Save a new product",
		description="With this method you can add a new product to our system. In response to the request, a 204 will be returned if everything goes well, if any invalid data is entered an error message will be displayed and the status 422 will be returned and between others." 
	)
	@PostMapping
	public ResponseEntity<Void> save(@RequestBody NewProductDTO newProductDTO) throws FarmaCristoException {
		this.productService.save(newProductDTO);
		return ResponseEntity.status(201).build();
	}
	
	@PreAuthorize("hasRole('Administrator')")
	@Operation (
		summary="Update an existent product",
		description="With this method you update an existing product in our system. In response to the request, a 204 will be returned if everything goes well, if any invalid data is entered an error message will be displayed and the status 422 will be returned and between others." 
	)
	@PutMapping("/{productId}")
	public ResponseEntity<Void> update(@PathVariable(name="productId") UUID id, @RequestBody NewProductDTO updatedProduct) throws FarmaCristoException {
		this.productService.update(id, updatedProduct);
		return ResponseEntity.noContent().build();
	}
	
	@PreAuthorize("hasRole('Administrator')")
	@Operation (
		summary="Update the image of an existing product",
		description="With this method you update the image of an existing product in our system. In response to the request, a 204 will be returned if everything goes well, otherwise an error message will be reported." 
	)
	@PutMapping("/image/{productId}")
	public ResponseEntity<Void> updateProductImageById(@PathVariable(name="productId") UUID id, @RequestPart(name="image") MultipartFile file) throws IOException, FarmaCristoException {
		this.productService.updateImage(id, file);
		return ResponseEntity.noContent().build();
	}
	
	@PreAuthorize("hasRole('Administrator')")
	@Operation (
		summary="Delete an existent product",
		description="With this method you delete an existing product in our system. In response to the request, a 204 will be returned if everything goes well, if the ID is incorrect an error message will be returned and the status will be 404." 
	)
	@DeleteMapping("/{productId}")
	public ResponseEntity<Void> delete(@PathVariable(name="productId") UUID id) throws FarmaCristoException {
		this.productService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
