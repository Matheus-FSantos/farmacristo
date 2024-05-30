package br.com.farmacristo.model.DTO.career;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

public record CurriculumDTO(UUID id, String name, String email, String description, Boolean isViewed, @JsonIgnore LocalDateTime createdAt) implements Serializable {

	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	
}
