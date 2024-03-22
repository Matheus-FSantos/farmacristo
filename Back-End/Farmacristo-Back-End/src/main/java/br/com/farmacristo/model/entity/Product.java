package br.com.farmacristo.model.entity;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_products")
public class Product implements Serializable {

	@Serial
	public static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private UUID id;
	
	@Column(nullable=false, length=200)
	private String name;
	
	@Column(nullable=false, length=500)
	private String description;
	
	@Column(nullable=false, length=150)
	private String brand;
	
	@Column(nullable=false)
	private Double price;
	
	@Column(nullable=false)
	private Double promotionalPrice;
	
	@Column(nullable=false)
	private Boolean prescriptionIsRequired;
	
	@Lob
	@Column(nullable=false, columnDefinition="LONGTEXT")
	private String image;
	
	@Column(nullable=false)
	private LocalDateTime createdAt;
	
	@Column(nullable=false)
	private LocalDateTime updatedAt;
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
		name="tb_products_pharmacies",
		joinColumns=@JoinColumn(name="product_id"),
		inverseJoinColumns=@JoinColumn(name="pharmacy_id")
	)
	Set<Pharmacy> pharmacies = new HashSet<Pharmacy>();
	
	public Product() { }

	public Product(String name, String description, String brand, Double price, Double promotionalPrice, Boolean prescriptionIsRequired, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.name = name;
		this.description = description;
		this.brand = brand;
		this.price = price;
		this.promotionalPrice = promotionalPrice;
		this.prescriptionIsRequired = prescriptionIsRequired;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Product(String name, String description, String brand, Double price, Double promotionalPrice, Boolean prescriptionIsRequired, String image, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.name = name;
		this.description = description;
		this.brand = brand;
		this.price = price;
		this.promotionalPrice = promotionalPrice;
		this.prescriptionIsRequired = prescriptionIsRequired;
		this.image = image;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	public Product(UUID id, String name, String description, String brand, Double price, Double promotionalPrice, Boolean prescriptionIsRequired, String image, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.brand = brand;
		this.price = price;
		this.promotionalPrice = promotionalPrice;
		this.prescriptionIsRequired = prescriptionIsRequired;
		this.image = image;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	@Override
	public int hashCode() {
		return Objects.hash(brand, createdAt, description, id, image, name, prescriptionIsRequired, price,
				promotionalPrice, updatedAt);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		return Objects.equals(brand, other.brand) && Objects.equals(createdAt, other.createdAt)
				&& Objects.equals(description, other.description) && Objects.equals(id, other.id)
				&& Objects.equals(image, other.image) && Objects.equals(name, other.name)
				&& Objects.equals(prescriptionIsRequired, other.prescriptionIsRequired)
				&& Objects.equals(price, other.price) && Objects.equals(promotionalPrice, other.promotionalPrice)
				&& Objects.equals(updatedAt, other.updatedAt);
	}
	
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", description=" + description + ", brand=" + brand + ", price="
				+ price + ", promotionalPrice=" + promotionalPrice + ", prescriptionIsRequired="
				+ prescriptionIsRequired + ", image=" + image + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt
				+ ", pharmacies=" + pharmacies + "]";
	}

	public UUID getId() {
		return id;
	}

	public void upadteId(UUID id) {
		this.setId(id);
	}

	private void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void updateName(String name) {
		this.setName(name);
	}

	private void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void updateDescription(String description) {
		this.setDescription(description);
	}

	private void setDescription(String description) {
		this.description = description;
	}

	public String getBrand() {
		return brand;
	}

	public void updateBrand(String brand) {
		this.setBrand(brand);
	}

	private void setBrand(String brand) {
		this.brand = brand;
	}

	public Double getPrice() {
		return price;
	}

	public void updatePrice(Double price) {
		this.setPrice(price);
	}

	private void setPrice(Double price) {
		this.price = price;
	}

	public Double getPromotionalPrice() {
		return promotionalPrice;
	}

	public void updatePromotionalPrice(Double promotionalPrice) {
		this.setPromotionalPrice(promotionalPrice);
	}

	private void setPromotionalPrice(Double promotionalPrice) {
		this.promotionalPrice = promotionalPrice;
	}

	public Boolean getPrescriptionIsRequired() {
		return prescriptionIsRequired;
	}

	public void updatePrescriptionIsRequired(Boolean prescriptionIsRequired) {
		this.setPrescriptionIsRequired(prescriptionIsRequired);
	}

	private void setPrescriptionIsRequired(Boolean prescriptionIsRequired) {
		this.prescriptionIsRequired = prescriptionIsRequired;
	}
	
	public String getImage() {
		return image;
	}
	
	@JsonIgnore
	public byte[] getImageBytes() {
		return Base64.getDecoder().decode(this.image);
	}
	
	public void updateImage(byte[] image) {
		this.setImage(image);
	}
	
	public void updateImage(String encodedImage) {
		this.setImage(encodedImage);
	}
	
	private void setImage(byte[] image) {
		this.image = Base64.getEncoder().encodeToString(image);
	}
	
	private void setImage(String encodedImage) {
		this.image = encodedImage;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void updateCreatedAt(LocalDateTime createdAt) {
		this.setCreatedAt(createdAt);
	}

	private void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void updateUpdatedAt() {
		this.setUpdatedAt(LocalDateTime.now());
	}

	public void updateUpdatedAt(LocalDateTime updatedAt) {
		this.setUpdatedAt(updatedAt);
	}

	private void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	public Set<Pharmacy> getPharmacies() {
		return pharmacies;
	}
}
