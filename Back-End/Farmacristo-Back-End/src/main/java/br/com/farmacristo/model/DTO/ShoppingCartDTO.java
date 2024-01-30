package br.com.farmacristo.model.DTO;

import java.util.Set;
import java.util.UUID;

import br.com.farmacristo.model.entity.Product;
import br.com.farmacristo.model.util.format.PriceFormat;

public record ShoppingCartDTO(UUID id, UUID userId, Set<Product> products) {
	public String getTotal() {
		Double total = 0D;
		
		for(Product product : products)
			total += product.getPrice();
		
		return PriceFormat.getFormattedPrice(total);
	}
}
