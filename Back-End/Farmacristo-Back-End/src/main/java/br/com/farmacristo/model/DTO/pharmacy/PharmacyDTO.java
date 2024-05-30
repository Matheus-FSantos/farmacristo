package br.com.farmacristo.model.DTO.pharmacy;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.farmacristo.model.DTO.viacep.AddressDTO;

public record PharmacyDTO(UUID id, String name, String email, @JsonIgnore String number, @JsonIgnore String postalCode, AddressDTO address) {

	public String getPostalCode() {
		StringBuilder finalPostalCode = new StringBuilder();
		finalPostalCode.append(postalCode.substring(0, 5)).append("-").append(postalCode.substring(5, postalCode.length()));
		
		return finalPostalCode.toString();
	}
	
	public String getNumber() {
		StringBuilder finalNumber = new StringBuilder();
		finalNumber.append(number.substring(0, 2)).append(" ").append(number.substring(2, 3)).append(" ").append(number.substring(3, 7)).append("-").append(number.substring(7, number.length()));
		
		return finalNumber.toString();
	}
	
}
