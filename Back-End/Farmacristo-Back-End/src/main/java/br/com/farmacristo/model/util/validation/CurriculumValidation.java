package br.com.farmacristo.model.util.validation;

import java.util.ArrayList;
import java.util.List;

import br.com.farmacristo.model.DTO.career.NewCurriculumDTO;
import br.com.farmacristo.model.exception.specialization.InvalidFields;

public class CurriculumValidation {
	
	public static void validation(NewCurriculumDTO newCurriculum) throws InvalidFields {
		List<String> messages = new ArrayList<String>();
		
		UserValidation.nameValidation(messages, newCurriculum.name());
		ProductValidation.descriptionValidation(messages, newCurriculum.description());
		
		if(!messages.isEmpty())
			throw new InvalidFields(messages, "Algumas informações foram inseridas de maneira incorreta. Por favor, verifique e corrija os campos necessários.");
	}
	
}
