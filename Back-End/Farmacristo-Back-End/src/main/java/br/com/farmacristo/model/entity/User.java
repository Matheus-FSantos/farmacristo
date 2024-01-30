package br.com.farmacristo.model.entity;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Objects;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.farmacristo.model.entity.enums.UserTier;
import br.com.farmacristo.model.exception.FarmaCristoException;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_users")
public class User implements Serializable {
	
	@Serial
	public static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private UUID id;
	
	@Column(nullable=false)
	private Integer tier;

	@Lob
	@Column(nullable=false)
	private String image;

	@Column(nullable=false, length=60)
	private String name;

	@Column(nullable=false, length=120, unique=true)
	private String email;

	@Column(nullable=false, length=120)
	private String password;
	
	@JsonIgnore
	@OneToOne(mappedBy="user", cascade=CascadeType.ALL, orphanRemoval=true)
	private ShoppingCart shoppingCart;
	
	@Column(nullable=false)
	private LocalDateTime createdAt;
	
	@Column(nullable=false)
	private LocalDateTime updatedAt;
	
	public User() { }

	public User(UserTier tier, String name, String email, String password) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.shoppingCart = null;
		this.createdAt = LocalDateTime.now();
		this.updatedAt = LocalDateTime.now();
		
		this.updateTier(tier);
	}
	
	public User(UUID id, UserTier tier, String name, String email, String password, ShoppingCart shoppingCart, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.shoppingCart = shoppingCart;
		
		this.updateTier(tier);
	}
	

	public User(UUID id, UserTier tier, String name, String email, String password, ShoppingCart shoppingCart, LocalDateTime createdAt, LocalDateTime updatedAt, byte[] image) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.shoppingCart = shoppingCart;
		
		this.updateTier(tier);
	}

	@Override
	public int hashCode() {
		return Objects.hash(createdAt, email, id, name, password, tier, updatedAt);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(createdAt, other.createdAt) && Objects.equals(email, other.email)
				&& Objects.equals(id, other.id) && Objects.equals(name, other.name)
				&& Objects.equals(password, other.password) && Objects.equals(tier, other.tier)
				&& Objects.equals(updatedAt, other.updatedAt);
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", tier=" + tier + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
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

	public UserTier getTier() throws FarmaCristoException {
		return UserTier.valueOf(tier);
	}

	public void updateTier(UserTier tier) {
		if(tier != null) {
			this.setTier(tier);
		}
	}

	private void setTier(UserTier tier) {
		this.tier = tier.getCode();
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
	
	public String getName() {
		return name;
	}

	public void updateName(String name) {
		this.setName(name);
	}

	public void setName(String name) {
		this.name = name;
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

	public String getPassword() {
		return password;
	}

	public void updatePassword(String password) {
		this.setPassword(password);
	}

	private void setPassword(String password) {
		this.password = password;
	}
	
	public ShoppingCart getShoppingCart() {
		return shoppingCart;
	}
	
	public void updateShoppingCart(ShoppingCart shoppingCart) {
		this.setShoppingCart(shoppingCart);
	}

	private void setShoppingCart(ShoppingCart shoppingCart) {
		this.shoppingCart = shoppingCart;
	}
	
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void updateCreatedAt() {
		this.setCreatedAt(LocalDateTime.now());
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
