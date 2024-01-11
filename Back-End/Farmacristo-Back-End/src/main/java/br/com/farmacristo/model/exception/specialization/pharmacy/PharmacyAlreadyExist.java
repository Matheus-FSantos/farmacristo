package br.com.farmacristo.model.exception.specialization.pharmacy;

import java.io.Serial;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;

import br.com.farmacristo.model.exception.FarmaCristoException;

public class PharmacyAlreadyExist extends FarmaCristoException {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	public PharmacyAlreadyExist() { }
	
	public PharmacyAlreadyExist(String message, String description) {
		super(message, description, HttpStatus.CONFLICT, LocalDateTime.now());
	}
	
	public PharmacyAlreadyExist(List<String> messages, String description) {
		super(messages, description, HttpStatus.CONFLICT, LocalDateTime.now());
	}
	
}
