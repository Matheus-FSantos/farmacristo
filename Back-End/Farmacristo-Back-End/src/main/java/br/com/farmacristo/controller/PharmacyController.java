package br.com.farmacristo.controller;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	
	@GetMapping("/image/{pharmacyId}")
	public ResponseEntity<ByteArrayResource> findProductImageById(@PathVariable(name="pharmacyId") UUID id) throws FarmaCristoException {
		PharmacyDTO pharmacyDTO = this.pharmacyService.findById(id);
		
		HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
	
        ByteArrayResource image= new ByteArrayResource(pharmacyDTO.getImageBytes());
        
		return ResponseEntity
				.ok()
					.headers(headers)
					.contentLength(pharmacyDTO.getImageBytes().length)
					.body(image);
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
	
	@PutMapping("/image/{pharmacyId}")
	public ResponseEntity<Void> updatePharmacyImageById(@PathVariable(name="pharmacyId") UUID id, @RequestPart(name="image") MultipartFile file) throws IOException, FarmaCristoException {
		this.pharmacyService.updatePharmacyImageById(id, file.getBytes());
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/{pharmacyId}")
	public ResponseEntity<List<Pharmacy>> delete(@PathVariable(name="pharmacyId") UUID id) throws FarmaCristoException {
		this.pharmacyService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
