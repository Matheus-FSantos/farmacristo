package br.com.farmacristo.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import br.com.farmacristo.model.DTO.career.CurriculumDTO;
import br.com.farmacristo.model.DTO.career.NewCurriculumDTO;
import br.com.farmacristo.model.entity.Curriculum;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.service.CurriculumService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/resumes")
@Tag(name="Curriculum", description="Controller class that will handle all requests coming to the URL: \"/api/resumes\" - that is, it controls everything related to the resumes.")
public class CurriculumController {
	
	@Autowired
	private CurriculumService service;

	@Operation (
		summary="Find all resumes",
		description="With this method you will be able to search for all existing resumes in our system. In return for the request, all formatted information will come from the respective resume - if it exists." 
	)
	@Cacheable("resumes")
	@PreAuthorize("hasRole('Administrator')")
	@GetMapping
	public ResponseEntity<List<CurriculumDTO>> findAll() {
		return ResponseEntity.ok().body(this.service.findAll());
	}

	@Operation (
		summary="Find resume by id",
		description="With this method you can search for a specific resume in our system. In return, all formatted information will come from the respective resume - if there is one." 
	)
	@PreAuthorize("hasRole('Administrator')")
	@GetMapping("/{curriculumId}")
	public ResponseEntity<CurriculumDTO> findById(@PathVariable(name="curriculumId") UUID id) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.service.findById(id));
	}
	
	@PreAuthorize("hasRole('Administrator')")
	@Operation (
		summary="Find resume pdf by id",
		description="With this method you can search for a specific resume pdf in our system." 
	)
	@GetMapping("/download/{curriculumId}")
	public ResponseEntity<ByteArrayResource> download(@PathVariable(name="curriculumId") UUID id) throws FarmaCristoException {
		Curriculum curriculum = this.service.findByIdDefault(id);
		
		if (curriculum.getCV() != null) {
			HttpHeaders headers = new HttpHeaders();
	        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + curriculum.getName());
	        headers.add(HttpHeaders.CONTENT_TYPE, "application/pdf");
	        headers.add(HttpHeaders.CONTENT_LENGTH, String.valueOf(curriculum.getCvBytes().length));
	        
	        return ResponseEntity.ok().headers(headers).body(new ByteArrayResource(curriculum.getCvBytes()));
		} else
			return ResponseEntity.notFound().build();
	}
	
	@Operation (
		summary="Save a new resume",
		description="With this method you can add a new resume to our system. In response to the request, a 204 will be returned if everything goes well." 
	)
	@CacheEvict(value="resumes", allEntries=true)
	@PostMapping
	public ResponseEntity<UUID> save(@RequestBody NewCurriculumDTO newCurriculum) throws FarmaCristoException {
		return ResponseEntity.status(HttpStatus.CREATED).body(this.service.save(newCurriculum));
	}
	
	@Operation (
		summary="Update resume cv an existent resume",
		description="With this method you update an existing resume in our system. In response to the request, a 204 will be returned if everything goes well." 
	)
	@CacheEvict(value="resumes", allEntries=true)
	@PutMapping("/cv/{curriculumId}")
	public ResponseEntity<Void> updateCurriculumCV(@PathVariable(name="curriculumId") UUID id, @RequestPart(name="cv") MultipartFile multipart) throws FarmaCristoException {
		this.service.updateCurriculumCV(id, multipart);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

	@Operation (
		summary="Update resume view an existent resume",
		description="With this method you update an existing resume in our system. In response to the request, a 204 will be returned if everything goes well."
	)
	@CacheEvict(value="resumes", allEntries=true)
	@PreAuthorize("hasRole('Administrator')")
	@PutMapping("/{curriculumId}")
	public ResponseEntity<Void> updateView(@PathVariable(name="curriculumId") UUID id) {
		this.updateView(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

	@Operation (
			summary="Delete resume view an existent resume",
			description="With this method you delete an existing resume in our system. In response to the request, a 204 will be returned if everything goes well."
	)
	@CacheEvict(value="resumes", allEntries=true)
	@PreAuthorize("hasRole('Administrator')")
	@DeleteMapping("/{curriculumId}")
	public ResponseEntity<Void> delete(@PathVariable(name="curriculumId") UUID id) throws FarmaCristoException {
		this.service.delete(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
}
