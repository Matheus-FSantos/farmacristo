package br.com.farmacristo.model.DTO.user;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.farmacristo.model.annotation.DTO;
import br.com.farmacristo.model.entity.User;
import br.com.farmacristo.model.exception.FarmaCristoException;

@DTO
public class UserInformationsDTO implements Serializable {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	private String id;
	private String tier;
	private String name;
	private String email;
	private String password;
	private String image;
	
	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	private LocalDateTime createdAt;
	
	public UserInformationsDTO() { }
	
	public UserInformationsDTO(User user) throws FarmaCristoException {
		this.id = user.getId().toString();
		this.tier = user.getTier().toString();
		this.name = user.getName();
		this.email = user.getEmail();
		this.password = user.getPassword();
		this.image = Arrays.toString(user.getImageBytes());
		this.createdAt = user.getCreatedAt();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTier() {
		return tier;
	}

	public void setTier(String tier) {
		this.tier = tier;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
}