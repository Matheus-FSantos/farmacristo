package br.com.farmacristo.model.DTO.pharmacy;

import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.farmacristo.model.DTO.viacep.AddressDTO;
import br.com.farmacristo.model.entity.Pharmacy;

public class PharmacyDTO {
	
	private String id;
	private String name;
	private String email;
	private String number;
	private String postalCode;
	private String image;
	private AddressDTO address;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	
	public PharmacyDTO(Pharmacy pharmacy, AddressDTO address) {
		this.id = pharmacy.getId().toString();
		this.name = pharmacy.getName();
		this.email = pharmacy.getEmail();
		this.number = pharmacy.getNumber();
		this.postalCode = pharmacy.getPostalCode();
		this.image = pharmacy.getImage();
		this.address = address;
		this.createdAt = pharmacy.getCreatedAt();
		this.updatedAt = pharmacy.getUpdatedAt();
	}

	@Override
	public int hashCode() {
		return Objects.hash(address, createdAt, email, id, image, name, number, postalCode);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PharmacyDTO other = (PharmacyDTO) obj;
		return Objects.equals(address, other.address) && Objects.equals(createdAt, other.createdAt)
				&& Objects.equals(email, other.email) && Objects.equals(id, other.id)
				&& Objects.equals(image, other.image) && Objects.equals(name, other.name)
				&& Objects.equals(number, other.number) && Objects.equals(postalCode, other.postalCode);
	}

	@Override
	public String toString() {
		return "PharmacyDTO [id=" + id + ", name=" + name + ", email=" + email + ", number=" + number + ", postalCode="
				+ postalCode + ", image=" + image + ", address=" + address + ", createdAt=" + createdAt + "]";
	}

	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
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
	
	public String getNumber() {
		StringBuilder finalNumber = new StringBuilder();
		finalNumber.append(number.substring(0, 2)).append(" ").append(number.substring(2, 3)).append(" ").append(number.substring(3, 7)).append("-").append(number.substring(7, number.length()));
		
		return finalNumber.toString();
	}
	
	@JsonIgnore
	public String getUnformattedNumber() {
		return number;
	}
	
	public void setNumber(String number) {
		this.number = number;
	}
	
	public String getPostalCode() {
		StringBuilder finalPostalCode = new StringBuilder();
		finalPostalCode.append(postalCode.substring(0, 5)).append("-").append(postalCode.substring(5, postalCode.length()));
		
		return finalPostalCode.toString();
	}
	
	@JsonIgnore
	public String getUnformattedPostalCode() {
		return postalCode;
	}
	
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	
	public String getImage() {
		return image;
	}
	
	@JsonIgnore
	public byte[] getImageBytes() {
		return Base64.getDecoder().decode(this.image);
	}
	
	public void setImage(String image) {
		this.image = image;
	}
	
	public AddressDTO getAddress() {
		return address;
	}

	public void setAddress(AddressDTO address) {
		this.address = address;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
	
}
