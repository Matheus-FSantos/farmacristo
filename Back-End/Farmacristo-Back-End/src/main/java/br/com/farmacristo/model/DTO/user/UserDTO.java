package br.com.farmacristo.model.DTO.user;

import java.io.Serializable;
import java.util.UUID;

import br.com.farmacristo.model.entity.enums.UserTier;

public record UserDTO(UUID id, String name, String email, String password, UserTier tier) implements Serializable {

}
