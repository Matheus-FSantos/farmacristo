package br.com.farmacristo.model.exception.specialization.product;

import java.io.Serial;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;

import br.com.farmacristo.model.exception.FarmaCristoException;

public class ProductNotFound extends FarmaCristoException {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	public ProductNotFound() { }
	
	public ProductNotFound(String message, String description) {
		super(message, description, HttpStatus.NOT_FOUND, LocalDateTime.now());
	}
	
	public ProductNotFound(List<String> messages, String description) {
		super(messages, description, HttpStatus.NOT_FOUND, LocalDateTime.now());
	}
	
}
