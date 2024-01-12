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
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@CrossOrigin("*")
@RequestMapping(path="/api/pharmacies")
@Tag(name="Pharmacy", description="Controller class that will handle all requests coming to the URL: \"/api/pharmacies\" - that is, it controls everything related to the pharmacy.")
public class PharmacyController {

	@Autowired
	private PharmacyService pharmacyService;
	
	@Operation (
		summary="Find all pharmacies",
		description="With this method you will be able to search for all existing pharmacies in our system. In return for the request, all formatted information will come from the respective pharmacy - if it exists - and its respective address." 
	)
	@GetMapping
	public ResponseEntity<List<PharmacyDTO>> findAll() throws FarmaCristoException {
		return ResponseEntity.ok().body(this.pharmacyService.findAll());
	}
	
	@Operation (
		summary="Find pharmacy by id",
		description="With this method you can search for a specific pharmacy in our system. In return, all formatted information will come from the respective pharmacy - if there is one - and the respective address." 
	)
	@GetMapping("/{pharmacyId}")
	public ResponseEntity<PharmacyDTO> findById(@PathVariable(name="pharmacyId") UUID id) throws FarmaCristoException {
		return ResponseEntity.ok().body(this.pharmacyService.findById(id));
	}
	
	@Operation (
		summary="Find pharmacy image by id",
		description="With this method you can search for a specific image of a pharmacy in our system. In return for this request, the image of the pharmacy will come, if it exists in our system." 
	)
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
	
	@Operation (
		summary="Save a new pharmacy",
		description="With this method you can add a new pharmacy to our system. In response to the request, a 204 will be returned if everything goes well, if the zip code is incorrect an error message will be returned and the status will be 404, if any invalid data is entered an error message will be displayed and the status 422 will be returned and between others." 
	)
	@PostMapping
	public ResponseEntity<Void> save(@RequestBody NewPharmacyDTO newPharmacyDTO) throws FarmaCristoException {
		this.pharmacyService.save(newPharmacyDTO);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@Operation (
		summary="Update an existent pharmacy",
		description="With this method you update an existing pharmacy in our system. In response to the request, a 204 will be returned if everything goes well, if the zip code is incorrect an error message will be returned and the status will be 404, if any invalid data is entered an error message will be displayed and the status 422 will be returned and between others." 
	)
	@PutMapping("/{pharmacyId}")
	public ResponseEntity<Void> update(@PathVariable(name="pharmacyId") UUID id, @RequestBody NewPharmacyDTO updatedPharmacy) throws FarmaCristoException {
		this.pharmacyService.updatePharmacy(id, updatedPharmacy);
		return ResponseEntity.noContent().build();
	}
	
	@Operation (
		summary="Update the image of an existing pharmacy",
		description="With this method you update the image of an existing pharmacy in our system. In response to the request, a 204 will be returned if everything goes well, otherwise an error message will be reported." 
	)
	@PutMapping("/image/{pharmacyId}")
	public ResponseEntity<Void> updatePharmacyImageById(@PathVariable(name="pharmacyId") UUID id, @RequestPart(name="image") MultipartFile file) throws IOException, FarmaCristoException {
		this.pharmacyService.updatePharmacyImageById(id, file);
		return ResponseEntity.noContent().build();
	}
	
	@Operation (
		summary="Delete an existent pharmacy",
		description="With this method you delete an existing pharmacy in our system. In response to the request, a 204 will be returned if everything goes well, if the ID is incorrect an error message will be returned and the status will be 404." 
	)
	@DeleteMapping("/{pharmacyId}")
	public ResponseEntity<List<Pharmacy>> delete(@PathVariable(name="pharmacyId") UUID id) throws FarmaCristoException {
		this.pharmacyService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
