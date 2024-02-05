package br.com.farmacristo.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
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
	        headers.add(HttpHeaders.CONTENT_LENGTH, String.valueOf(curriculum.getCV().length));
	        
	        return ResponseEntity.ok().headers(headers).body(new ByteArrayResource(curriculum.getCV()));
		} else
			return ResponseEntity.notFound().build();
	}
	
	@Operation (
		summary="Save a new resume",
		description="With this method you can add a new resume to our system. In response to the request, a 204 will be returned if everything goes well." 
	)
	@PostMapping
	public ResponseEntity<UUID> save(@RequestBody NewCurriculumDTO newCurriculum) throws FarmaCristoException {
		return ResponseEntity.status(HttpStatus.CREATED).body(this.service.save(newCurriculum));
	}
	
	@Operation (
		summary="Update resume cv an existent resume",
		description="With this method you update an existing resume in our system. In response to the request, a 204 will be returned if everything goes well." 
	)
	@PutMapping("/cv/{curriculumId}")
	public ResponseEntity<Void> updateCurriculumCV(@PathVariable(name="curriculumId") UUID id, @RequestPart(name="cv") MultipartFile multipart) throws FarmaCristoException {
		this.service.updateCurriculumCV(id, multipart);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

	@Operation (
		summary="Update resume view an existent resume",
		description="With this method you update an existing resume in our system. In response to the request, a 204 will be returned if everything goes well." 
	)
	@PreAuthorize("hasRole('Administrator')")
	@PutMapping("/{curriculumId}")
	public ResponseEntity<Void> updateView(@PathVariable(name="curriculumId") UUID id) {
		this.updateView(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
}
