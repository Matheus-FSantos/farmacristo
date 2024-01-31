package br.com.farmacristo.model.DTO;

import java.util.Set;
import java.util.UUID;

import br.com.farmacristo.model.DTO.product.ProductDTO;
import br.com.farmacristo.model.util.format.PriceFormat;

public record ShoppingCartDTO(UUID id, UUID userId, Set<ProductDTO> products) {
	public String getTotal() {
		Double total = 0D;
		
		for(ProductDTO product : products)
			total += product.price();
		
		return PriceFormat.getFormattedPrice(total);
	}
}
