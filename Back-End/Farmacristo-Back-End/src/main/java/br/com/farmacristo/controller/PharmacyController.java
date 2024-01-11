package br.com.farmacristo.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.farmacristo.model.DTO.pharmacy.NewPharmacyDTO;
import br.com.farmacristo.model.DTO.pharmacy.PharmacyDTO;
import br.com.farmacristo.model.entity.Pharmacy;
import br.com.farmacristo.model.exception.FarmaCristoException;
import br.com.farmacristo.model.service.PharmacyService;

@RestController
@CrossOrigin("*")
@RequestMapping(path="/api/pharmacies")
public class PharmacyController {

	@Autowired
	private PharmacyService pharmacyService;
	
	@GetMapping
	public ResponseEntity<List<PharmacyDTO>> findAll() throws FarmaCristoException {
		return ResponseEntity.ok().body(this.pharmacyService.findAll());
	}
	
	@GetMapping("/{pharmacyId}")
	public ResponseEntity<PharmacyDTO> findById(@PathVariable(name="pharmacyId") UUID id) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.pharmacyService.findById(id));
	}
	
	@GetMapping("/name-like/{name}")
	public ResponseEntity<List<PharmacyDTO>> findByNameLike(@PathVariable(name="name") String name) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.pharmacyService.findByNameLike(name));
	}
	
	@PostMapping
	public ResponseEntity<Void> save(@RequestBody NewPharmacyDTO newPharmacyDTO) throws FarmaCristoException {
		this.pharmacyService.save(newPharmacyDTO);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PutMapping("/{pharmacyId}")
	public ResponseEntity<Void> update(@PathVariable(name="pharmacyId") UUID id, @RequestBody NewPharmacyDTO updatedPharmacy) throws FarmaCristoException {
		this.pharmacyService.updatePharmacy(id, updatedPharmacy);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/{pharmacyId}")
	public ResponseEntity<List<Pharmacy>> delete(@PathVariable(name="pharmacyId") UUID id) throws FarmaCristoException {
		this.pharmacyService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
