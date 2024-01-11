package br.com.farmacristo.model.exception;

import java.time.LocalDateTime;

import java.io.Serial;

import java.util.List;
import java.util.Collections;

import org.springframework.http.HttpStatus;

public class FarmaCristoException extends Exception {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	private List<String> messages;
	private String description;
	private HttpStatus statusCode;
	private LocalDateTime exceptionAt;
	
	public FarmaCristoException() { }
	
	public FarmaCristoException(String message, String description, HttpStatus statusCode, LocalDateTime exceptionAt) {
		this.messages = Collections.singletonList(message);
		this.description = description;
		this.statusCode = statusCode;
		this.exceptionAt = exceptionAt;
	}
	
	public FarmaCristoException(List<String> messages, String description, HttpStatus statusCode, LocalDateTime exceptionAt) {
		this.messages = messages;
		this.description = description;
		this.statusCode = statusCode;
		this.exceptionAt = exceptionAt;
	}
	
	public List<String> getMessages() {
		return messages;
	}
	
	public void setMessages(List<String> messages) {
		this.messages = messages;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public HttpStatus getStatusCode() {
		return statusCode;
	}
	
	public void setStatusCode(HttpStatus statusCode) {
		this.statusCode = statusCode;
	}
	
	public LocalDateTime getExceptionAt() {
		return exceptionAt;
	}
	
	public void setExceptionAt(LocalDateTime exceptionAt) {
		this.exceptionAt = exceptionAt;
	}
	
}
