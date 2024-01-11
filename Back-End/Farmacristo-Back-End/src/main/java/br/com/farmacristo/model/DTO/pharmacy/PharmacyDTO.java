package br.com.farmacristo.model.DTO.pharmacy;

import java.util.Objects;

import br.com.farmacristo.model.DTO.viacep.AddressDTO;
import br.com.farmacristo.model.entity.Pharmacy;

public class PharmacyDTO {
	
	private String id;
	private String name;
	private String email;
	private String number;
	private String postalCode;
	private AddressDTO address;
	
	public PharmacyDTO(Pharmacy pharmacy, AddressDTO address) {
		this.id = pharmacy.getId().toString();
		this.name = pharmacy.getName();
		this.email = pharmacy.getEmail();
		this.setNumber(pharmacy.getNumber());
		this.postalCode = pharmacy.getPostalCode();
		this.address = address;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(address, email, id, name, number, postalCode);
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
		return Objects.equals(address, other.address) && Objects.equals(email, other.email)
				&& Objects.equals(id, other.id) && Objects.equals(name, other.name)
				&& Objects.equals(number, other.number) && Objects.equals(postalCode, other.postalCode);
	}

	@Override
	public String toString() {
		return "PharmacyDTO [id=" + id + "name=" + name + ", email=" + email + ", number=" + number + ", postalCode=" + postalCode
				+ ", address=" + address + "]";
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
		return number;
	}
	
	public void setNumber(String number) {
		StringBuilder finalNumber = new StringBuilder();
		finalNumber.append(number.substring(0, 2)).append(" ").append(number.substring(2, 3)).append(" ").append(number.substring(3, 7)).append("-").append(number.substring(7, number.length()));
		
		this.number = finalNumber.toString();
	}
	
	public String getPostalCode() {
		return postalCode;
	}
	
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	
	public AddressDTO getAddress() {
		return address;
	}
	
	public void setAddress(AddressDTO address) {
		this.address = address;
	}
	
	
}
