package br.com.farmacristo.model.DTO;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.farmacristo.model.annotation.DTO;
import br.com.farmacristo.model.exception.FarmaCristoException;

@DTO
public class FarmaCristoExceptionDTO implements Serializable {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	private List<String> messages;
	private String description;
	private Integer statusCode;
	
	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	private LocalDateTime exceptionAt;
	
	public FarmaCristoExceptionDTO(FarmaCristoException farmaCristoException) {
		this.messages = farmaCristoException.getMessages();
		this.description = farmaCristoException.getDescription();
		this.statusCode = farmaCristoException.getStatusCode().value();
		this.exceptionAt = farmaCristoException.getExceptionAt();
	}

	@Override
	public String toString() {
		return "FarmaCristoExceptionDTO [messages=" + messages + ", description=" + description + ", statusCode="
				+ statusCode + ", exceptionAt=" + exceptionAt + "]";
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

	public Integer getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}

	public LocalDateTime getExceptionAt() {
		return exceptionAt;
	}

	public void setExceptionAt(LocalDateTime exceptionAt) {
		this.exceptionAt = exceptionAt;
	}
	
}
