package br.com.farmacristo.model.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_shopping_cart")
public class ShoppingCart implements Serializable {
	
	public static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private UUID id;
	
	@OneToOne
    @JoinColumn(name = "user_id")
    private User user;
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(
		name="tb_products_shopping_cart",
		joinColumns=@JoinColumn(name="shopping_cart_id"),
		inverseJoinColumns=@JoinColumn(name="product_id")
	)
	private Set<Product> products = new HashSet<Product>();
	
	private LocalDateTime createdAt;
	
	private LocalDateTime updatedAt;

	public ShoppingCart() { }
	
	public ShoppingCart(User user) {
		this.setUser(user);
		this.createdAt = LocalDateTime.now();
		this.updatedAt = LocalDateTime.now();
	}
	
	public ShoppingCart(UUID id, User user) {
		this.id = id;
		this.setUser(user);
		this.createdAt = LocalDateTime.now();
		this.updatedAt = LocalDateTime.now();
	}

	@Override
	public int hashCode() {
		return Objects.hash(createdAt, id, products, updatedAt, user);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ShoppingCart other = (ShoppingCart) obj;
		return Objects.equals(createdAt, other.createdAt) && Objects.equals(id, other.id)
				&& Objects.equals(products, other.products) && Objects.equals(updatedAt, other.updatedAt)
				&& Objects.equals(user, other.user);
	}
	
	@Override
	public String toString() {
		return "ShoppingCart [id=" + id + ", user=" + user + ", products=" + products + ", createdAt=" + createdAt
				+ ", updatedAt=" + updatedAt + "]";
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

	public User getUser() {
		return user;
	}

	public void updateUser(User user) {
		this.setUser(user);
	}

	private void setUser(User user) {
		user.updateShoppingCart(this);
		this.user = user;
	}
	
	public Set<Product> getProducts() {
		return products;
	}
	
	public Double getTotal() {
		Double total = 0D;
		
		for(Product product : this.getProducts()) {
			total += product.getPrice();
		}
		
		return total;
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
