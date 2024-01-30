package br.com.farmacristo.model.entity;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Objects;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_pharmacy")
public class Pharmacy implements Serializable {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;

	@Column(nullable=false, length=100)
	private String name;
	
	@Column(nullable=false, length=11)
	private String number;
	
	@Column(nullable=false, length=120, unique=true)
	private String email;
	
	@Column(nullable=false, length=8)
	private String postalCode;
	
	@Lob
	private String image;
	
	@Column(nullable=false)
	private LocalDateTime createdAt;
	
	@Column(nullable=false)
	private LocalDateTime updatedAt;

	public Pharmacy() { }
	
	public Pharmacy(String name, String number, String email, String postalCode, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.name = name;
		this.number = number;
		this.email = email;
		this.postalCode = postalCode;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	public Pharmacy(UUID id, String name, String number, String email, String postalCode, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.id = id;
		this.name = name;
		this.number = number;
		this.email = email;
		this.postalCode = postalCode;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Pharmacy(UUID id, String name, String number, String email, String postalCode, byte[] image, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.id = id;
		this.name = name;
		this.number = number;
		this.email = email;
		this.postalCode = postalCode;
		this.updateImage(image);
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	public Pharmacy(UUID id, String name, String number, String email, String postalCode, String image, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.id = id;
		this.name = name;
		this.number = number;
		this.email = email;
		this.postalCode = postalCode;
		this.image = image;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	@Override
	public String toString() {
		return "Pharmacy [id=" + id + ", name=" + name + ", number=" + number + ", email=" + email + ", postalCode="
				+ postalCode + ", image=" + image + ", createdAt=" + createdAt + ", updatedAt="
				+ updatedAt + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(createdAt, email, id, image, name, number, postalCode, updatedAt);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pharmacy other = (Pharmacy) obj;
		return Objects.equals(createdAt, other.createdAt) && Objects.equals(email, other.email)
				&& Objects.equals(id, other.id) && Objects.equals(image, other.image)
				&& Objects.equals(name, other.name) && Objects.equals(number, other.number)
				&& Objects.equals(postalCode, other.postalCode) && Objects.equals(updatedAt, other.updatedAt);
	}

	public UUID getId() {
		return id;
	}

	public void updateId(UUID id) {
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

	public String getNumber() {
		return number;
	}

	public void updateNumber(String number) {
		this.setNumber(number);
	}

	private void setNumber(String number) {
		this.number = number;
	}

	public String getEmail() {
		return email;
	}

	public void updateEmail(String email) {
		this.setEmail(email);
	}

	private void setEmail(String email) {
		this.email = email;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void updatePostalCode(String postalCode) {
		this.setPostalCode(postalCode);
	}

	private void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
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
	
}
