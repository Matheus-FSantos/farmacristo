package br.com.farmacristo.model.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.farmacristo.model.DTO.ShoppingCartDTO;
import br.com.farmacristo.model.DTO.product.ProductDTO;
import br.com.farmacristo.model.annotation.Auth;
import br.com.farmacristo.model.entity.Product;
import br.com.farmacristo.model.entity.ShoppingCart;
import br.com.farmacristo.model.entity.User;
import br.com.farmacristo.model.exception.specialization.pharmacy.PharmacyNotFound;
import br.com.farmacristo.model.exception.specialization.product.ProductNotFound;
import br.com.farmacristo.model.exception.specialization.shoppingCart.ShoppingCartNotFound;
import br.com.farmacristo.model.exception.specialization.viacep.CEPNotFound;
import br.com.farmacristo.model.repository.ShoppingCartRepository;

@Service
public class ShoppingCartService {

	public static Logger logger = LoggerFactory.getLogger(ShoppingCartService.class);
	
	@Autowired
	private ShoppingCartRepository repository;
	
	@Autowired
	private ProductService productService;
	
	public List<ShoppingCartDTO> findAll() throws ProductNotFound, PharmacyNotFound, CEPNotFound {
		List<ShoppingCart> shoppingCarts = this.repository.findAll();
		List<ShoppingCartDTO> shoppingCartsDTO = new ArrayList<ShoppingCartDTO>();
		
		Set<ProductDTO> productsDTO = new HashSet<ProductDTO>();
		
		for(ShoppingCart shoppingCart : shoppingCarts) {
			for(Product product : shoppingCart.getProducts())
				productsDTO.add(this.productService.findById(product.getId()));
			
			shoppingCartsDTO.add(new ShoppingCartDTO(shoppingCart.getId(), shoppingCart.getUser().getId(), productsDTO));
			productsDTO.clear();
		}

		return shoppingCartsDTO;
	}
	
	public ShoppingCartDTO findById(UUID id) throws ShoppingCartNotFound, ProductNotFound, PharmacyNotFound, CEPNotFound {
		ShoppingCart shoppingCart = this.findByIdDefault(id);
		Set<ProductDTO> productsDTO = new HashSet<ProductDTO>();
		
		for(Product product : shoppingCart.getProducts())
			productsDTO.add(this.productService.findById(product.getId()));
			
		return new ShoppingCartDTO(shoppingCart.getId(), shoppingCart.getUser().getId(), productsDTO);
	}
	
	@Auth(required=true)
	public Set<ProductDTO> findShoppingCartProductsByUserId(UUID userId) throws ProductNotFound, PharmacyNotFound, CEPNotFound {
		List<ShoppingCartDTO> shoppingCarts = this.findAll();
		
		for(ShoppingCartDTO shoppingCart : shoppingCarts)
			if(shoppingCart.userId().equals(userId))
				return shoppingCart.products();
		
		return null;
	}
	
	public ShoppingCart findByIdDefault(UUID id) throws ShoppingCartNotFound {
		return this.repository.findById(id).orElseThrow(() -> new ShoppingCartNotFound("Carrinho não encontrado.", "Você tentou buscar informações de carrinho de compras inexistente. Por favor, altere as informações e realize uma nova busca."));
	}
	
	public ShoppingCart newShoppingCart(User user) {
		return this.repository.save(new ShoppingCart(user));
	}

	public void addProductOnShoppingCart(UUID id, UUID productId) throws ProductNotFound, ShoppingCartNotFound {
		 Product product = this.productService.findByIdDefault(productId);
		 ShoppingCart shoppingCart = this.findByIdDefault(id);
		 
		 shoppingCart.getProducts().add(product);
		 shoppingCart.updateUpdatedAt();
		 
		 this.repository.save(shoppingCart);
	}
	
	public void removeProductOnShoppingCart(UUID id, UUID productId) throws ProductNotFound, ShoppingCartNotFound {
		Product product = this.productService.findByIdDefault(productId);
		ShoppingCart shoppingCart = this.findByIdDefault(id);
	
		if(shoppingCart.getProducts().contains(product)) {
			shoppingCart.getProducts().remove(product);
			this.repository.save(shoppingCart);
		} else
			throw new ProductNotFound("Produto não encontrado.", "Você tentou apagar um produto inexistente em seu carrinho de compras. Por favor, altere as informações e realize uma nova requisição.");
	}
	
}
