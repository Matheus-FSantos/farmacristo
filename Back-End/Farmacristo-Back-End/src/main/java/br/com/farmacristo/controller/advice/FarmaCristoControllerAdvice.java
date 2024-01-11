package br.com.farmacristo.controller.advice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import br.com.farmacristo.model.DTO.FarmaCristoExceptionDTO;
import br.com.farmacristo.model.exception.FarmaCristoException;

@RestControllerAdvice
public class FarmaCristoControllerAdvice {

	@ExceptionHandler(FarmaCristoException.class)
	public ResponseEntity<FarmaCristoExceptionDTO> handleFarmaCristoExceptions(FarmaCristoException farmaCristoException) {
		return ResponseEntity.status(farmaCristoException.getStatusCode()).body(new FarmaCristoExceptionDTO(farmaCristoException));
	}
	
}
