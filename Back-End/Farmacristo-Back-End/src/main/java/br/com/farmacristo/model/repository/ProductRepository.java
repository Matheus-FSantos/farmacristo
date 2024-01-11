package br.com.farmacristo.model.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.farmacristo.model.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID>{
	
	List<Product> findByNameLike(String name);
}
