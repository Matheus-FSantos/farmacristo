package br.com.farmacristo.model.DTO.product;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.farmacristo.model.DTO.pharmacy.PharmacyDTO;
import br.com.farmacristo.model.util.format.PriceFormat;

public record ProductDTO(UUID id, String name, String description, String brand, @JsonIgnore Double price, @JsonIgnore Double promotionalPrice, Boolean prescriptionIsRequired, List<PharmacyDTO> pharmacies) implements Serializable {
	
	public String getPrice() {
		return PriceFormat.getFormattedPrice(price);
	}
	
	public String getPromotionalPrice() {
		return PriceFormat.getFormattedPrice(promotionalPrice);
	}
	
}
