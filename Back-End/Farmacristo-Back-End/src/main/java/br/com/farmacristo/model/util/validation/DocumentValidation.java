package br.com.farmacristo.model.util.validation;

import org.springframework.web.multipart.MultipartFile;

import br.com.farmacristo.model.exception.specialization.InvalidFields;

public class DocumentValidation {

	public static void pdfValidation(MultipartFile file) throws InvalidFields {
		if (!file.getContentType().equals("application/pdf"))
			throw new InvalidFields("O arquivo informado é inválido, para essa requisção, só é aceito arquivos do tipo PDF. Por favor, altere os valores e faça uma nova requisição", "Algumas informações foram inseridas de maneira incorreta. Por favor, verifique e corrija os campos necessários.");
	}
	
}
