package br.com.farmacristo.model.DTO.pharmacy;

public record NewPharmacyDTO(
	String name,
	String number,
	String email,
	String postalCode
) { }
