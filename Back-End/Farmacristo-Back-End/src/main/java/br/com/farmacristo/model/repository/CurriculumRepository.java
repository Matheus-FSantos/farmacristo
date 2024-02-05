package br.com.farmacristo.model.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.farmacristo.model.entity.Curriculum;

@Repository
public interface CurriculumRepository extends JpaRepository<Curriculum, UUID> { }
