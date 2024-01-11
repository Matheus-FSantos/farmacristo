package br.com.farmacristo.model.repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.farmacristo.model.entity.Pharmacy;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, UUID>{

	List<Pharmacy> findByNameLike(String name);
	
	Optional<Pharmacy> findByEmail(String email);
	
}
