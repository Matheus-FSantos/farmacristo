package br.com.farmacristo.model.util.validation;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import br.com.farmacristo.model.DTO.product.NewProductDTO;
import br.com.farmacristo.model.DTO.product.ProductPharmacyDTO;
import br.com.farmacristo.model.exception.specialization.InvalidFields;

public class ProductValidation {

	public static void validation(NewProductDTO newProductDTO) throws InvalidFields {
		List<String> messages = new ArrayList<String>();

		ProductValidation.nameValidation(messages, newProductDTO.getName());
		ProductValidation.descriptionValidation(messages, newProductDTO.getDescription());
		ProductValidation.brandValidation(messages, newProductDTO.getBrand());
		ProductValidation.priceValidation(messages, newProductDTO.getPrice());
		ProductValidation.promotionalPriceValidation(messages, newProductDTO);
		ProductValidation.prescriptionIsRequiredValidation(messages, newProductDTO.getPrescriptionIsRequired());
		ProductValidation.pharmaciesValidation(messages, newProductDTO.getPharmacies());
		
		if(!messages.isEmpty())
			throw new InvalidFields(messages, "Algumas informações foram inseridas de maneira incorreta. Por favor, verifique e corrija os campos necessários.");
	}

	public static void nameValidation(List<String> messages, String name) {
		if(name == null)
			messages.add("O campo NOME não pode ser nulo.");
		else if(name.length() < 2 || name.length() > 200)
			messages.add("O campo NOME deve conter entre 2 e 200 caracteres.");
	}
	
	public static void descriptionValidation(List<String> messages, String description) {
		if(description == null)
			messages.add("O campo DESCRIÇÃO não pode ser nulo.");
		else if(description.length() < 5 || description.length() > 500)
			messages.add("O campo DESCRIÇÃO deve conter entre 5 e 500 caracteres.");
	}

	public static void brandValidation(List<String> messages, String brand) {
		if(brand == null)
			messages.add("O campo MARCA não pode ser nulo.");
		else if(brand.length() < 2 || brand.length() > 150)
			messages.add("O campo MARCA deve conter entre 2 e 150 caracteres.");
	}
	
	public static void priceValidation(List<String> messages, Double price) {
		if(price == null || price <= 0)
			messages.add("O PREÇO do produto não pode ser nulo e seu valor deve ser maior que R$ 0,00.");
	}
	
	public static void promotionalPriceValidation(List<String> messages, NewProductDTO newProductDTO) {
		if(newProductDTO.getPromotionalPrice() == null)
			newProductDTO.setPromotionalPrice(newProductDTO.getPrice());
		else if(newProductDTO.getPromotionalPrice() <= 0 || newProductDTO.getPromotionalPrice() > newProductDTO.getPrice())
			messages.add("O PREÇO PROMOCIONAL do produto não pode ter o seu valor maior que o preço original do produto.");
	}
	
	public static void prescriptionIsRequiredValidation(List<String> messages, Boolean prescriptionIsRequired) {
		if(prescriptionIsRequired == null)
			messages.add("Informar se é obrigatório o uso de prescrição para a compra desse produto é requerido.");
	}
	
	public static void pharmaciesValidation(List<String> messages, Set<ProductPharmacyDTO> pharmacies) {
		if(pharmacies == null || pharmacies.isEmpty())
			messages.add("O produto não pode ser criado sem estar presente em PELO MENOS UMA FARMÁCIA. Por favor, atualize os campos e tente novamente.");	
	}
	
}
