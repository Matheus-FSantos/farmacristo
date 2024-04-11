package br.com.farmacristo.model.exception.specialization.product;

import br.com.farmacristo.model.exception.FarmaCristoException;
import org.springframework.http.HttpStatus;

import java.io.Serial;
import java.time.LocalDateTime;
import java.util.List;

public class ProductAlreadyExist extends FarmaCristoException {

	@Serial
	private static final long serialVersionUID = 1L;

	public ProductAlreadyExist() { }

	public ProductAlreadyExist(String message, String description) {
		super(message, description, HttpStatus.CONFLICT, LocalDateTime.now());
	}

	public ProductAlreadyExist(List<String> messages, String description) {
		super(messages, description, HttpStatus.CONFLICT, LocalDateTime.now());
	}
	
}
