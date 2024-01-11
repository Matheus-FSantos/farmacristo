package br.com.farmacristo.model.exception.specialization.user;

import java.io.Serial;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;

import br.com.farmacristo.model.exception.FarmaCristoException;

public class InvalidUserTierCode extends FarmaCristoException {

	@Serial
	private static final long serialVersionUID = 1L;
	
	public InvalidUserTierCode() { }
	
	public InvalidUserTierCode(String message, String description) {
		super(message, description, HttpStatus.UNPROCESSABLE_ENTITY, LocalDateTime.now());
	}
	
	public InvalidUserTierCode(List<String> messages, String description) {
		super(messages, description, HttpStatus.UNPROCESSABLE_ENTITY, LocalDateTime.now());
	}
	
}
