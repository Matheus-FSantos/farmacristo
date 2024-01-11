package br.com.farmacristo.model.exception.specialization;

import java.io.Serial;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;

import br.com.farmacristo.model.exception.FarmaCristoException;

public class InvalidFields extends FarmaCristoException {
	
	@Serial
	public static final long serialVersionUID = 1L;

	public InvalidFields() { }
	
	public InvalidFields(String message, String description) {
		super(message, description, HttpStatus.UNPROCESSABLE_ENTITY, LocalDateTime.now());
	}
	
	public InvalidFields(List<String> messages, String description) {
		super(messages, description, HttpStatus.UNPROCESSABLE_ENTITY, LocalDateTime.now());
	}
	
}
