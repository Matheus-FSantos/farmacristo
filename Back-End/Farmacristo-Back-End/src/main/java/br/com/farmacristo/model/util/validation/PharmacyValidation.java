package br.com.farmacristo.model.util.validation;

import java.util.ArrayList;
import java.util.List;

import br.com.farmacristo.model.DTO.pharmacy.NewPharmacyDTO;
import br.com.farmacristo.model.exception.specialization.InvalidFields;

public class PharmacyValidation {
	
	public static void validation(NewPharmacyDTO newPharmacyDTO) throws InvalidFields {
		List<String> messages = new ArrayList<String>();
		
		PharmacyValidation.nameValidation(messages, newPharmacyDTO.name());
		UserValidation.emailValidation(messages, newPharmacyDTO.email());
		PharmacyValidation.numberValidation(messages, newPharmacyDTO.number());
		PharmacyValidation.CEPValidation(messages, newPharmacyDTO.postalCode());
		
		if(!messages.isEmpty())
			throw new InvalidFields(messages, "Algumas informações foram inseridas de maneira incorreta. Por favor, verifique e corrija os campos necessários.");
 	}
	
	public static void CEPValidation(List<String> messages, String postalCode) {
		if(postalCode == null)
			messages.add("O campo CEP não pode ser nulo.");
		else
			if(postalCode.length() != 8)
				messages.add("O campo CEP deve conter 8 caracteres, exemplo: 05111199.");
	}

	public static void nameValidation(List<String> messages, String name) {
		if(name == null)
			messages.add("O campo NOME não pode ser nulo.");
		else
			if(name.length() < 2 || name.length() > 100)
				messages.add("O campo NOME deve conter entre 2 e 100 caracteres.");
	}
	
	public static void numberValidation(List<String> messages, String number) {
		if(number == null)
			messages.add("O campo NÚMERO não pode ser nulo.");
		else
			if(number.length() != 11)
				messages.add("O campo NÚMERO deve conter 11 caracteres, exemplo: 11912344321.");
	}
	
}
