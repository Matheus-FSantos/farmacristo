package br.com.farmacristo.model.DTO.user;

import java.util.UUID;

public record LoginResponseDTO(UUID id, String email, String password) {

}
