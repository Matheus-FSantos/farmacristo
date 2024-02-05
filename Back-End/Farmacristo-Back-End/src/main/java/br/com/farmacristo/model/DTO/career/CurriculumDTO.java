package br.com.farmacristo.model.DTO.career;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

public record CurriculumDTO(String name, String description, Boolean isViewed, @JsonIgnore LocalDateTime createdAt) {

	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	
}
