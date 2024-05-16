package br.com.farmacristo.model.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Arrays;
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
@Table(name="tb_curriculum")
public class Curriculum implements Serializable {

	public static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private UUID id;
	
	@Column(nullable=false, length=60)
	private String name;

	@Column(nullable=false, length=120)
	private String email;
	
	@Column(nullable=false, length=500)
	private String description;
	
	@Lob
	@Column(columnDefinition="LONGTEXT")
	private String CV;
	private Boolean isViewed;
	private LocalDateTime createdAt;
	
	public Curriculum() { }

	public Curriculum(String name, String email, String description) {
		this.name = name;
		this.email = email;
		this.description = description;
		this.isViewed = false;
		this.createdAt = LocalDateTime.now();
	}
	
	public Curriculum(UUID id, String name, String email, String description, Boolean isViewed, LocalDateTime createdAt) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.description = description;
		this.isViewed = isViewed;
		this.createdAt = createdAt;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Curriculum that = (Curriculum) o;
		return Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(email, that.email) && Objects.equals(description, that.description) && Objects.equals(CV, that.CV) && Objects.equals(isViewed, that.isViewed) && Objects.equals(createdAt, that.createdAt);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, email, description, CV, isViewed, createdAt);
	}

	@Override
	public String toString() {
		return "Curriculum{" +
				"id=" + id +
				", name='" + name + '\'' +
				", email='" + email + '\'' +
				", description='" + description + '\'' +
				", CV='" + CV + '\'' +
				", isViewed=" + isViewed +
				", createdAt=" + createdAt +
				'}';
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

	public String getEmail() { return email; }

	public void updateEmail(String email) { this.setEmail(email); }

	private void setEmail(String email) { this.email = email; }

	public String getDescription() {
		return description;
	}

	public void updateDescription(String description) {
		this.setDescription(description);
	}

	private void setDescription(String description) {
		this.description = description;
	}

	public Boolean getIsViewed() {
		return isViewed;
	}

	public void updateIsViewed(Boolean isViewed) {
		this.setIsViewed(isViewed);
	}

	private void setIsViewed(Boolean isViewed) {
		this.isViewed = isViewed;
	}

	public String getCV() {
		return CV;
	}

	@JsonIgnore
	public byte[] getCvBytes() {
		return Base64.getDecoder().decode(this.CV);
	}

	public void updateCV(byte[] CV) {
		this.setCV(CV);
	}
	
	private void setCV(byte[] CV) {
		this.CV = Base64.getEncoder().encodeToString(CV);
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
	
}
