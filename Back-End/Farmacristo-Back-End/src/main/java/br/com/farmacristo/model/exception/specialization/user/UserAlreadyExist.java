package br.com.farmacristo.model.exception.specialization.user;

import java.io.Serial;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;

import br.com.farmacristo.model.exception.FarmaCristoException;

public class UserAlreadyExist extends FarmaCristoException {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	public UserAlreadyExist() { }
	
	public UserAlreadyExist(String message, String description) {
		super(message, description, HttpStatus.CONFLICT, LocalDateTime.now());
	}
	
	public UserAlreadyExist(List<String> messages, String description) {
		super(messages, description, HttpStatus.CONFLICT, LocalDateTime.now());
	}
	
}
