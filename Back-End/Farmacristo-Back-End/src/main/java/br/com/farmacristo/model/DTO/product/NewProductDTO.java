package br.com.farmacristo.model.DTO.product;

import java.io.Serializable;
import java.util.Objects;

import br.com.farmacristo.model.annotation.DTO;

@DTO
public class NewProductDTO implements Serializable {

	public static final long serialVersionUID = 1L;
	
	private String name;
	private String description;
	private String brand;
	private Double price;
	private Double promotionalPrice;
	private Boolean prescriptionIsRequired;
	
	public NewProductDTO(String name, String description, String brand, Double price, Double promotionalPrice, Boolean prescriptionIsRequired) {
		this.name = name;
		this.description = description;
		this.brand = brand;
		this.price = price;
		this.promotionalPrice = promotionalPrice;
		this.prescriptionIsRequired = prescriptionIsRequired;
	}

	@Override
	public int hashCode() {
		return Objects.hash(brand, description, name, prescriptionIsRequired, price, promotionalPrice);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		NewProductDTO other = (NewProductDTO) obj;
		return Objects.equals(brand, other.brand) && Objects.equals(description, other.description)
				&& Objects.equals(name, other.name)
				&& Objects.equals(prescriptionIsRequired, other.prescriptionIsRequired)
				&& Objects.equals(price, other.price) && Objects.equals(promotionalPrice, other.promotionalPrice);
	}



	@Override
	public String toString() {
		return "NewProductInfosDTO [name=" + name + ", description=" + description + ", brand=" + brand + ", price="
				+ price + ", promotionalPrice=" + promotionalPrice + ", prescriptionIsRequired="
				+ prescriptionIsRequired + "]";
	}



	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getBrand() {
		return brand;
	}
	
	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	public Double getPrice() {
		return price;
	}
	
	public void setPrice(Double price) {
		this.price = price;
	}
	
	public Double getPromotionalPrice() {
		return promotionalPrice;
	}
	
	public void setPromotionalPrice(Double promotionalPrice) {
		this.promotionalPrice = promotionalPrice;
	}
	
	public Boolean getPrescriptionIsRequired() {
		return prescriptionIsRequired;
	}
	
	public void setPrescriptionIsRequired(Boolean prescriptionIsRequired) {
		this.prescriptionIsRequired = prescriptionIsRequired;
	}
	
}
