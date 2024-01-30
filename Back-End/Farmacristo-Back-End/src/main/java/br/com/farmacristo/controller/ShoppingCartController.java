package br.com.farmacristo.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.farmacristo.model.DTO.ShoppingCartDTO;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.service.ShoppingCartService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/shopping-cart")
@Tag(name="Shopping Cart", description="Controller class that will handle all requests coming to the URL: \"/api/shopping-cart\" - that is, it controls everything related to the shopping cart.")
public class ShoppingCartController {
	
	@Autowired
	private ShoppingCartService service;
	
	@Operation (
		summary="Find all shopping carts",
		description="With this method you will be able to search for all existing shopping carts in our system. In return for the request, all formatted information will come from the respective shopping carts - if it exists." 
	)
	@GetMapping
	public ResponseEntity<List<ShoppingCartDTO>> findAll() {
		return ResponseEntity.ok().body(this.service.findAll());
	}
	
	@Operation (
		summary="Find shopping cart by id",
		description="With this method you can search for a specific shopping cart in our system. In return, all formatted information will come from the respective shopping cart - if there is one." 
	)
	@GetMapping("/{shoppingCartId}")
	public ResponseEntity<ShoppingCartDTO> findById(@PathVariable(name="shoppingCartId") UUID id) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.service.findById(id));
	}
	
	@Operation (
		summary="Add product on shopping cart",
		description="This method will add a specific product to a specific shopping cart."
	)
	@PostMapping("/{shoppingCartId}/product/{productId}")
	public ResponseEntity<Void> addProductOnShoppingCart(@PathVariable(name="shoppingCartId") UUID id, @PathVariable(name="productId") UUID productId) throws FarmaCristoException {
		this.service.addProductOnShoppingCart(id, productId);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	
	@Operation (
		summary="Remove product on shopping cart",
		description="This method will remove a specific product to a specific shopping cart."
	)
	@DeleteMapping("/{shoppingCartId}/product/{productId}")
	public ResponseEntity<Void> removeProductOnShoppingCart(@PathVariable(name="shoppingCartId") UUID id, @PathVariable(name="productId") UUID productId) throws FarmaCristoException {
		this.service.removeProductOnShoppingCart(id, productId);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
}
