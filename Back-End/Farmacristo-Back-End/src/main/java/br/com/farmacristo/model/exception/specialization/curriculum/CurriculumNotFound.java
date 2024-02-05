package br.com.farmacristo.model.exception.specialization.curriculum;

import java.io.Serial;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;

import br.com.farmacristo.model.exception.FarmaCristoException;

public class CurriculumNotFound extends FarmaCristoException {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	public CurriculumNotFound() { }
	
	public CurriculumNotFound(String message, String description) {
		super(message, description, HttpStatus.NOT_FOUND, LocalDateTime.now());
	}
	
	public CurriculumNotFound(List<String> messages, String description) {
		super(messages, description, HttpStatus.NOT_FOUND, LocalDateTime.now());
	}
	
}
