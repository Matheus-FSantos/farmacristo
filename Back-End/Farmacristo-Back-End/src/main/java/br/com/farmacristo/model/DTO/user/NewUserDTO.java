package br.com.farmacristo.model.DTO.user;

import br.com.farmacristo.model.annotation.DTO;

@DTO
public record NewUserDTO(String name, String password, String email) { }
