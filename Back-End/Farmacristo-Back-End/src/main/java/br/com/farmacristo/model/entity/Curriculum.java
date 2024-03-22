package br.com.farmacristo.model.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Objects;
import java.util.UUID;

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
	
	@Column(nullable=false, length=200)
	private String name;
	
	@Column(nullable=false, length=500)
	private String description;
	
	@Lob
	@Column(columnDefinition="LONGTEXT")
	private byte[] CV;
	private Boolean isViewed;
	private LocalDateTime createdAt;
	
	public Curriculum() { }

	public Curriculum(String name, String description) {
		this.name = name;
		this.description = description;
		this.isViewed = false;
		this.createdAt = LocalDateTime.now();
	}
	
	public Curriculum(UUID id, String name, String description, Boolean isViewed, LocalDateTime createdAt) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.isViewed = isViewed;
		this.createdAt = createdAt;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(CV);
		result = prime * result + Objects.hash(createdAt, description, id, isViewed, name);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Curriculum other = (Curriculum) obj;
		return Arrays.equals(CV, other.CV) && Objects.equals(createdAt, other.createdAt)
				&& Objects.equals(description, other.description) && Objects.equals(id, other.id)
				&& Objects.equals(isViewed, other.isViewed) && Objects.equals(name, other.name);
	}

	@Override
	public String toString() {
		return "Curriculum [id=" + id + ", name=" + name + ", description=" + description + ", CV="
				+ Arrays.toString(CV) + ", isViewed=" + isViewed + ", createdAt=" + createdAt + "]";
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
	
	public byte[] getCV() {
		return CV;
	}

	public void updateCV(byte[] CV) {
		this.setCV(CV);
	}
	
	private void setCV(byte[] CV) {
		this.CV = CV;
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
